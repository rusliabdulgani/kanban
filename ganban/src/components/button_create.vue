<template lang="html">
  <div>
    <!-- Trigger the modal with a button -->
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#myModal">create task</button>
    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">New Task</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="control-label" for="focusedInput">Input title</label>
              <input class="form-control" id="focusedInput" type="text" placeholder="title" v-model="title">
            </div>
            <div class="form-group">
              <label for="textArea" class="control-label">Description</label>
              <div>
                <textarea class="form-control" id="textArea" v-model="description"></textarea>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="focusedInput">Point</label>
              <input class="form-control" id="focusedInput" type="text" v-model="point">
            </div>
            <div class="form-group">
              <label class="control-label" for="focusedInput">Assign To</label>
              <input class="form-control" id="focusedInput" type="text" placeholder="assign to" v-model="assign_to">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" data-dismiss="modal" @click="addTask">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      point: 0,
      assign_to: ''
    }
  },
  methods: {
    addTask () {
      let id = 1
      this.$db.ref('task/backlog/').on('value', function (data) {
        if (data.val().length === 0) {
          id = data.val().length + id
        } else {
          id = data.val().length
        }
      })
      this.$db.ref('task/backlog/' + id).set({
        title: this.title,
        description: this.description,
        point: this.point,
        assign_to: this.assign_to
      })
    }
  }
}
</script>

<style lang="css" scoped>
button {
  padding: 5px;
  margin-top: 15px;
}
</style>
