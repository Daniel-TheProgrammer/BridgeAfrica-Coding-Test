<template>
  <div class="home">
    <TabsSection></TabsSection>
    <ProfileBanner></ProfileBanner>
    <CardSet />
    <!-- <ProductCard></ProductCard> -->
  </div>
</template>

<script>
// @ is an alias to /src

import TabsSection from '@/components/TabsSection.vue'
import ProfileBanner from '../components/ProfileBanner.vue'
import CardSet from '../components/CardSet.vue'
export default {
  name: 'Home',
  components: {
    TabsSection, ProfileBanner, CardSet

  }
}
</script>
