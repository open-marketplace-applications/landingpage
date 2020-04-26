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
          >
            <!-- <div class="search-wrapper">
              <div class="icon-wrapper">
                <img src="@/assets/icons/search.svg" alt="" class="icon" />
              </div>
              <input type="text" placeholder="Find your marketplace" />
            </div> -->
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
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

// const iotaAreaCodes = require("@iota/area-codes");

export default {
  components: { Section, Container },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 11,
      center: [52.529797, 13.413094],
      bounds: null,
      shops: [],
      pharmacies: []
    };
  },
  computed: {
    iconTarget() {
      if (process.browser) {
        require("vue2-leaflet");
        return L.icon({
          iconUrl: require("@/assets/icons/crosshair.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    },
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

  async created() {
    try {
      const overpass_url = "https://lz4.overpass-api.de/api/interpreter";
      const overpass_query = `
        [out:json];
        area["ISO3166-1"="DE"][admin_level=2];
        (node["amenity"="marketplace"](area);
          way["amenity"="marketplace"](area);
          rel["amenity"="marketplace"](area);
        );
        out center;
      `;
      const res = await this.$axios.get(
        `${overpass_url}?data=${overpass_query}`
      );

      if (res.data.elements) {
        this.shops = res.data.elements;
      }

      // overpass_query = `
      //   [out:json];
      //   area["ISO3166-1"="DE"][admin_level=2];
      //   (node["amenity"="pharmacy"](area);
      //     way["amenity"="pharmacy"](area);
      //     rel["amenity"="pharmacy"](area);
      //   );
      //   out center;
      // `
      // res = await this.$axios.get( `${overpass_url}?data=${overpass_query}`)
      // console.log("pharmacies res", res)

      // if(res.data.elements) {
      //   this.pharmacies = res.data.elements
      //   console.log("pharmacies", this.pharmacies)
      // }

      // 17420 pharmacies

      // Example:
      //  {
      //   type: 'node',
      //   id: 32508627,
      //   lat: 50.0012021,
      //   lon: 9.0676958,
      //   tags: {
      //     'addr:city': 'Kleinostheim',
      //     'addr:housenumber': '60',
      //     'addr:postcode': '63801',
      //     'addr:street': 'Goethestraße',
      //     amenity: 'pharmacy',
      //     'contact:phone': '+49 6027 6622',
      //     dispensing: 'yes',
      //     name: 'Laurentiusapotheke',
      //     opening_hours: 'Mo-Fr 08:30-12:30,14:30-18:30; We,Sa 08:30-12:30',
      //     operator: 'Thomas Bsonek',
      //     website: 'http://www.laurentius-apotheke.net/',
      //     wheelchair: 'yes'
      //   }
      // },

      // https://wiki.openstreetmap.org/wiki/DE:Key:shop
    } catch (error) {}
  },
  mounted() {
    // do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
    } else {
      // // get position from browser
      // navigator.geolocation.getCurrentPosition(
      //   pos => {
      //     this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
      //     this.gettingLocation = true;
      //   },
      //   err => {
      //     this.gettingLocation = false;
      //     this.errorStr = err.message;
      //   }
      // );
    }
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
  pointer-events: none;
}

.search-wrapper {
  position: absolute;
  left: 50px;
  top: 10px;
  height: 50px;
  z-index: 1000;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  display: flex;
  border-radius: var(--radius);
  overflow: hidden;
  .icon-wrapper {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    padding-left: 62px;
    padding-right: 12px;
    font-size: 14px;
    min-width: 260px;
  }
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
