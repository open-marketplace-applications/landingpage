<template>
  <div id="content" class="content-wrapper">
    <div v-for="(item, index) in items" :key="index" class="content">
      <div class="container">
        <div v-bind:class="{ inverted: item.layout_inverted }" class="row">
          <div class="col center-center">
            <img
              :src="require(`../assets/${item.icon}`)"
              alt
              class="iso-icon"
            />
          </div>
          <div class="col">
            <h2>{{ item.heading }}</h2>
            <p>{{ item.description }}</p>
            <div class="list">
              <div
                v-for="(listItem, i) in item.list"
                :key="i"
                class="list__item"
              >
                <img src="~/assets/icons/caret.svg" alt />
                <span>{{ listItem }}</span>
              </div>
            </div>
            <div
              v-bind:class="{ 'link-disabled': item.link.disabled }"
              class="link btn btn--primary"
            >
              <a :href="item.link.url" target="_blank">{{ item.link.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          layout_inverted: false,
          heading: "Marketplace",
          description:
            "You can discover local shops on the online marketplace application map. Find new interesting shops, or create your own!",
          icon: "city.png",
          list: ["Discover Shops", "Create your own shop", "Read the Shop FAQ"],
          link: {
            text: "Discover Demo",
            url: "https://open-marketplace-applications.github.io/marketplace"
          }
        },
        {
          layout_inverted: true,
          heading: "Delivery",
          description:
            "We offers a delivery platform for local orders; every certified user will be able to deliver goods in exchange for discounts or money. An algorithm calculates the best and cheapest route to deliver your goods.",
          icon: "pick_up_package.jpg",
          list: [
            "Helping with Delivery",
            "Earn some extra money",
            "Be part with your city!"
          ],
          link: {
            text: "Demo Delivery (Soon)",
            url: "http://openmarketplace.org"
          }
        },
        {
          layout_inverted: false,
          heading: "Rewards and more",
          description:
            "OMA is the regional and global communication center! Citizens can offer their help, post requests or just chat informally.",
          icon: "reward.png",
          list: [
            "Peer2Peer Chatting",
            "Encrpyted and Secure",
            "Realtime Question and Answers",
            "Reward system based on Blockchain Technology"
          ],
          link: {
            text: "Discover Chat (Soon)",
            url: "http://openmarketplace.org"
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.content {
  padding: 150px 0;
  @media only screen and (max-width: 1240px) {
    padding: 130px 50px;
  }
  @media only screen and (max-width: 900px) {
    padding: 100px 30px;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px 20px;
  }
}

.row {
  display: flex;
  margin: 0 -25px;
  &.inverted {
    flex-direction: row-reverse;
  }
  @media only screen and (max-width: 900px) {
    flex-wrap: wrap;
    .iso-icon {
      max-width: 10%;
      margin-bottom: 30px;
    }
  }
}
.iso-icon {
  max-width: 80%;
  margin-bottom: 30px;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin: 0 25px;
  &.center-center {
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    p,
    span {
      font-size: 14px;
    }
    .iso-icon {
      max-width: 80%;
      margin-bottom: 30px;
    }
  }
}
h2 {
  font-size: 64px;
  color: var(--dark);
  text-transform: uppercase;
  @media only screen and (max-width: 500px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 32px;
  }
}
.list {
  margin-bottom: 50px;
  &__item {
    display: flex;
    align-items: center;
    margin: 8px 0;
    img {
      margin-top: 1px;
      height: 16px;
      width: 20px;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
}
.link {
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 40px;
  padding: 0 30px;
  background-color: var(--light);
  border-radius: 50px;
  font-weight: 900;
  font-size: 14px;
  background-color: var(--primary);
  a {
    color: var(--white);
    text-decoration: none;
  }
  &-disabled {
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
    a {
      cursor: not-allowed;
    }
  }
}
</style>
