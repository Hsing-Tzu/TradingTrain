<template>
  <div>
    <button v-if="!publicWalletAddress" @click="connectPhantom">Connect Wallet</button>
    <div v-else>
      <p>Welcome to the Solana network, {{ publicWalletAddress }}</p>
      <button @click="disconnectPhantom">Disconnect Wallet</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicWalletAddress: ''
    }
  },
  methods: {
    async connectPhantom() {
      const walletData = window.solana && window.solana.isPhantom
      if (walletData) {
        try {
          await window.solana.connect();
          const publicKey = window.solana.publicKey.toString();
          this.publicWalletAddress = publicKey;
        } catch (e) {
          console.log(e)
        }
      } else {
        alert('Phantom wallet is not installed');
      }
    },
    disconnectPhantom() {
      window.solana.disconnect();
      this.publicWalletAddress = '';
    }
  }
}
</script>


<style scoped>
body {
  background-color: rgba(31, 41, 55, 1);
}
.success_img {
  width: 90%;
}
.success_img img {
  width: 90%;
}
</style>