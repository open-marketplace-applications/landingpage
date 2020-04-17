<template>
  <div id="map-wrap">
    <client-only>
      <l-map
        class="map"
        :zoom="zoom"
        :center="center"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated"
      >
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :icon="iconTarget" :lat-lng="center">
          <l-popup></l-popup>
        </l-marker>

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
</template>

<script>
const iotaAreaCodes = require("@iota/area-codes");

export default {
  components: {},
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 13,
      center: [52.529797, 13.413094],
      bounds: null,
      shops: [],
      pharmacies: []
    };
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
  },

  async created() {
    try {
      let overpass_url = "https://lz4.overpass-api.de/api/interpreter";
      let overpass_query = `
        [out:json];
        area["ISO3166-1"="DE"][admin_level=2];
        (node["amenity"="marketplace"](area);
          way["amenity"="marketplace"](area);
          rel["amenity"="marketplace"](area);
        );
        out center;
      `;
      let res = await this.$axios.get(`${overpass_url}?data=${overpass_query}`);

      console.log("res", res);
      if (res.data.elements) {
        this.shops = res.data.elements;
        console.log("shops", this.shops);
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
    } catch (error) {
      console.log("error fetching marketmap data", error);
    }
  },
  mounted() {
    //do we support geolocation
    if (!("geolocation" in navigator)) {
      this.errorStr = "Geolocation is not available.";
      return;
    }
    // get position
    navigator.geolocation.getCurrentPosition(
      pos => {
        this.center = L.latLng(pos.coords.latitude, pos.coords.longitude);
        this.gettingLocation = true;
      },
      err => {
        this.gettingLocation = false;
        this.errorStr = err.message;
      }
    );
  },
  computed: {
    iconTarget() {
      if (process.browser) {
        require("vue2-leaflet");
        console.log("th", this);
        console.log("th", L);
        return L.icon({
          iconUrl: require("@/assets/icons/target-marker.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    },
    iconShop() {
      if (process.browser) {
        require("vue2-leaflet");
        console.log("th", this);
        console.log("th", L);
        return L.icon({
          iconUrl: require("@/assets/icons/shop_smal.svg"),
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });
      }
    }
  }
};
</script>

<style>
#map-wrap {
  height: 50vh;
  margin-top: 15px;
}
.map {
  height: 100%;
  width: 100%;
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
  float: none !important; /* Added */
}
</style>