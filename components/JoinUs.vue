<template>
  <div id="content" class="content-wrapper">
    <div class="content">
      <div class="container">
        <el-row>
          <el-col :sm="24" :md="12" :lg="10">
            <h2>Join us</h2>
            <p>
              Do you also want an Open Marketplace in your City? No Problem!
              Just join our Discord Chat Server and aks in the
              #marketplace-request channel for more information. This project is
              huge and the applications get continuously improved by community
              feedback. We currently building many decentralized teams all over
              the world - it's would be cool if you become a part of it and help
              with any contribution!
            </p>
            <h3>Regional Marketplace Leader</h3>
            <p>
              Manages the Open Marketplace in a city and takes care of the local
              community.
            </p>
            <h3>Contributor</h3>
            <p>
              They help to improve the project with contributions of any kind.
            </p>
          </el-col>
          <el-col :sm="24" :md="12" :lg="14" class="discord-icon">
            <img src="~/assets/icons/discord_large.svg" alt="discord" />
            <Button
              v-bind:type="'primary'"
              v-bind:href="'https://discord.gg/XDQQcJC'"
              v-bind:target="'_blank'"
            >
              Jump right in
            </Button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/library/Button";

export default {
  components: { Button }
};
</script>

<style lang="scss" scoped>
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

.discord-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 200px;
  }
  @media only screen and (max-width: 992px) {
    margin-top: 50px;
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

h3 {
  margin-top: 20px;
}
</style>
