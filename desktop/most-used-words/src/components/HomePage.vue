<template>
  <div class="pills">
    <PillComponent v-for="it in groupedWords" :word="it.word" :amount="it.amount" :key="it.word"/>
  </div>
</template>

<script>
import PillComponent from './PillComponent.vue';


export default {
    components: { PillComponent },
    data: function() {
        return {
            groupedWords: [
                // mocked data
                { word: "i", amount: 547 },
                { word: "you", amount: 478 },
                { word: "it", amount: 110 }
            ]
        }
    }
};
</script>

<style scoped>
.pills {
    display: flex;
}
</style>
