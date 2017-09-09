<template lang="html">
  <div>
    <div class="panel panel-primary">
  <div class="panel-heading">
    <h3 class="panel-title">Back Log</h3>
  </div>
  <div class="panel-body">
    <div class="panel panel-default" v-for="back in backlog">
      <div class="panel-heading">{{ back.title }}</div>
      <div class="panel-body">
        <p>Point : {{ back.point }}</p>
        <p>Assign to : {{back.assign_to }}</p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal2" @click="getDetail(back['.key'])">
          detail
        </button>

        <!-- Modal -->
        <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Detail task {{detail.title}} for {{detail.assign_to}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <b>Task Description:</b>
                {{ detail.description }}
                <br>
                <b>Task Point:</b>
                {{ detail.point }}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
          </div>
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
      detail: {}
    }
  },
  firebase: function () {
    return {
      backlog: this.$db.ref('task/backlog/')
    }
  },
  methods: {
    show () {
      console.log('===============', this.detail)
    },
    getDetail (id) {
      this.detail = this.backlog[`${id - 1}`]
      console.log(this.detail)
    }
  },
  created () {
    this.show()
  }
}
</script>

<style lang="css">
</style>
