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
        // { word: "i", amount: 547 },
        // { word: "you", amount: 478 },
        // { word: "it", amount: 110 },
        
      ],
    };
  },
  methods: {
    processSubtitles() {
        let paths = this.files.map(it => it.path)
        ipcRenderer.send("process-subtitles", paths)
        ipcRenderer.on("process-subtitles", (event, resp) => {
            this.groupedWords = resp
        })

        // console.log(this.files)
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
