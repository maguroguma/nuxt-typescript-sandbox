<template>
  <div>
    <h1>Vue draggable（ページ）</h1>

    <div :class="{ 'drag-on': isDragging, 'drag-off': !isDragging }">
      {{ 'ドラッグ状態: ' + isDragging }}
    </div>

    <div
      v-for="nodes in nodesList"
      :key="nodes.id"
      class="drag-area"
      :class="{
        'ng-area': nodes.groupId === 'ng',
        'ok-area': nodes.groupId === 'ok',
        'from-area': nodes.isFrom,
        'to-area': nodes.isTo && isDragging,
      }"
      @dragenter="enter(nodes)"
      @dragleave="leave(nodes)"
    >
      <h2 @dragleave.prevent="noop" @dragenter.prevent="noop">
        {{ 'エリア' + nodes.id + ':' }}
      </h2>
      <ul @dragleave.prevent="noop" @dragend.prevent="noop">
        <draggable v-model="nodes.nodes" :group="nodes.groupId" @start="start(nodes)" @end="end(nodes)">
          <li v-for="node in nodes.nodes" :key="node.id">{{ node.text }}</li>
        </draggable>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import draggable from 'vuedraggable'

interface Node {
  id: number
  value: number
  text: string
}

interface NodeList {
  id: number
  groupId: string
  isFrom: boolean
  isTo: boolean
  nodes: Node[]
}

export default Vue.extend({
  components: {
    draggable,
  },

  data() {
    return {
      isDragging: false,
      nodesList: [] as NodeList[],
    }
  },

  created() {
    for (let i = 0; i < 5; i++) {
      const nodes = {
        id: i,
        groupId: i < 2 ? 'ng' : 'ok',
        isFrom: false,
        isTo: false,
        nodes: [] as Node[],
      }
      for (let j = 0; j < 3; j++) {
        const v = 3 * i + j
        const t = String(v).repeat(10)
        nodes.nodes.push({
          id: v,
          value: 100 + v,
          text: t,
        })
      }
      this.nodesList.push(nodes)
    }
  },

  methods: {
    start(nodes: NodeList) {
      nodes.isFrom = true
      this.isDragging = true
    },
    end(nodes: NodeList) {
      nodes.isFrom = false
      this.isDragging = false

      this.nodesList.forEach((nodes) => {
        nodes.nodes.sort((a, b) => {
          if (a.id < b.id) {
            return -1
          }
          if (a.id > b.id) {
            return 1
          }
          return 0
        })
      })
    },
    enter(nodes: NodeList) {
      console.log('ENTER')
      nodes.isTo = true
    },
    leave(nodes: NodeList) {
      console.log('LEAVE')
      nodes.isTo = false
    },
    noop(e: any) {
      console.log(e.target)
    },
  },
})
</script>

<style scoped>
div.ng-area {
  border: 4px solid red;
}

div.ok-area {
  border: 4px solid blue;
}

div.drag-on {
  background-color: green;
}

div.drag-off {
  background-color: red;
}

div.from-area {
  background-color: red;
}
div.to-area {
  background-color: green;
}
</style>
