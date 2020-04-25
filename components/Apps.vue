<template>
  <div id="content" class="content-wrapper">
    <div class="content">
      <div class="container">
        <el-row>
          <el-col :sm="24" :md="24" :lg="8">
            <h2>Apps</h2>
            <p>
              The open marketplace can be combined with many open applications.
              All of tem are dezentral and free to use - you can host them for
              yourself, of use the Open Cloud to host it.
            </p>
          </el-col>
          <el-col :sm="24" :md="24" :lg="16">
            <div class="apps-wrapper">
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Marketplace</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/shop-app.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Shop</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/delivery.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Delivery</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/chat.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Chat</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/data-marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Data Marketplace</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/news.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">News</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/discount.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Discount</span>
              </div>
              <div class="app-icon-container">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/social-network.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Social Network</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  background-color: var(--darker);
  color: var(--white);
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

h2 {
  font-size: 64px;
  text-transform: uppercase;
  @media only screen and (max-width: 500px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 330px) {
    font-size: 32px;
  }
}

.apps-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media only screen and (max-width: 1200px) {
    margin-top: 50px;
  }
}

.app-icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: calc(25% - 25px);
  @media only screen and (max-width: 800px) {
    width: calc(50% - 25px);
  }
  @media only screen and (max-width: 440px) {
    width: 100%;
  }

  .app-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    width: 150px;
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
    .app-icon {
      max-height: 80px;
      max-width: 80px;
    }
  }

  .app-name {
    font-weight: var(--weight-bold);
  }
}
</style>
