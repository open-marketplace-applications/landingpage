<template>
  <Section bg="dark">
    <Container size="fluid">
      <div id="map-wrap">
        <client-only>
          <l-map
            :zoom="zoom"
            :center="center"
            @update:center="centerUpdated"
            @update:bounds="boundsUpdated"
            class="map"
            scroll-wheel-zoom="false"
            ref="map"
            id="map"
          >
            <Search />
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker
              v-for="(shop, index) in shops"
              :key="'shop-' + index"
              :icon="iconShop"
              :lat-lng="[shop.lat, shop.lon]"
            >
              <l-popup>
                <h3>{{ shop.tags.name }}</h3>
              </l-popup>
            </l-marker>
            <l-marker
              v-for="(pharmacy, index) in pharmacies"
              :key="'pharmacy-' + index"
              :icon="iconShop"
              :lat-lng="[pharmacy.lat, pharmacy.lon]"
            >
              <l-popup>
                <h3>{{ pharmacy.tags.name }}</h3>
              </l-popup>
            </l-marker>
          </l-map>
        </client-only>
      </div>
    </Container>
  </Section>
</template>

<script>
// L I B R A R Y
import Section from "@/components/library/layout/Section";
import Container from "@/components/library/layout/Container";
import Search from "./Search";

// const iotaAreaCodes = require("@iota/area-codes");

export default {
  components: { Section, Container, Search },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 16,
      center: [52.529797, 13.413094],
      bounds: null,
      shops: [],
      pharmacies: []
    };
  },
  computed: {
    iconShop() {
      if (process.browser) {
        require("vue2-leaflet");
        return L.icon({
          iconUrl: require("@/assets/icons/shop.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    }
  },

  async mounted() {
    if (process.client) {
      require("leaflet-control-geocoder");
      this.$nextTick(() => {
        console.log("map mapObject", this.$refs.map.mapObject);
        this.$L.Control.geocoder({
          geocoder: this.$L.Control.Geocoder.nominatim()
        }).addTo(this.$refs.map.mapObject);
      });
    }

    try {
      const overpass_url = "https://lz4.overpass-api.de/api/interpreter";
      let overpass_query = `
        [out:json];
        area[name="Berlin"];
        (node["amenity"="marketplace"](area);
          way["amenity"="marketplace"](area);
          rel["amenity"="marketplace"](area);
        );
        out center;
      `;
      let res = await this.$axios.get(`${overpass_url}?data=${overpass_query}`);

      overpass_query = `
        [out:json];
        area[name="Berlin"];
        (node["amenity"="pharmacy"](area);
          way["amenity"="pharmacy"](area);
          rel["amenity"="pharmacy"](area);
        );
        out center;
      `;
      res = await this.$axios.get(`${overpass_url}?data=${overpass_query}`);
      console.log("pharmacies res", res);
      if (res.data.elements) {
        this.pharmacies = res.data.elements;
        console.log("pharmacies", this.pharmacies);
      }
      overpass_query = `
        [out:json];
        area[name="Berlin"];
        (node["shop"="bakery"](area);
          way["shop"="bakery"](area);
          rel["shop"="bakery"](area);
        );
        out center;
      `;
      res = await this.$axios.get(`${overpass_url}?data=${overpass_query}`);
      console.log("bakeries res", res);
      if (res.data.elements) {
        this.shops = [...this.shops, ...res.data.elements];
        console.log("bakeries", res.data.elements);
      }

      if (res.data.elements) {
        this.shops = res.data.elements;
      }
    } catch (error) {}
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    }
  }
};
</script>

<style lang="scss" scoped>
#map-wrap {
  height: calc(100vh - 100px);
}

.map {
  position: relative;
  height: 100%;
  width: auto !important;
  border-radius: 10px;
}

.spots {
  padding-top: 80px;
  padding-bottom: 20px;
  float: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  width: 80%;
  display: block !important;
  margin-right: auto !important;
  margin-left: auto !important;
  float: none !important;
}
</style>
