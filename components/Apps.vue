<template>
  <div id="content" class="content-wrapper">
    <div class="content">
      <div class="container">
        <el-row>
          <el-col :span="8">
            <h2>Apps</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr.
            </p>
            <el-button class="btn btn-primary">Abgehts</el-button>
          </el-col>
          <el-col :span="16">
            <el-row>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/shop-app.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Shop</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Marketplace</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/delivery.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Delivery</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/chat.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Chat</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/data-marketplace.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Data Marketplace</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/news.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">News</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/discount.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Discount</span>
              </el-col>
              <el-col :span="6" class="app">
                <div class="app-icon-wrapper">
                  <img
                    src="~assets/icons/social-network.svg"
                    alt="shop icon"
                    class="app-icon"
                  />
                </div>
                <span class="app-name">Social Network</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.content {
  background-color: var(--dark);
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

.container {
  width: 1200px;
  margin: 0 auto;
  @media only screen and (max-width: 1240px) {
    width: 100%;
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

.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

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
