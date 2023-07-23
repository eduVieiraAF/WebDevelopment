<template>
  <div class="home">
    <v-form>
      <v-file-input
        label="Select Subtitles"
        prepend-icon="mdi-message-text"
        append-icon="mdi-send"
        outlined
        multiple
        v-model="files"
        @click:append="processSubtitles"
      >
      </v-file-input>
    </v-form>
    <div class="pills">
      <PillComponent
        v-for="it in groupedWords"
        :word="it.word"
        :amount="it.amount"
        :key="it.word"
      />
    </div>
  </div>
</template>

<script>
import PillComponent from "./PillComponent.vue";
import { ipcRenderer } from 'electron'

export default {
  components: { PillComponent },
  data: function () {
    return {
      files: [],
      groupedWords: [
        // mocked data
        { word: "i", amount: 547 },
        { word: "you", amount: 478 },
        { word: "it", amount: 110 },
        
      ],
    };
  },
  methods: {
    processSubtitles() {
        ipcRenderer.send("hello", "Connected to channel")
        ipcRenderer.on("hello", (event, data) => {
            console.log(data)
        })
        console.log(this.files)
    }
  },
};
</script>
<style scoped>
.home {
    margin: 20px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
