<template lang="html">
  <!-- Modal -->
  <div>
    <div class="modal fade" :id="id.substring(1)" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Detail task <b>"{{detail.title}}"</b> for <b>{{detail.assign_to}}</b></h5>
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
            <br>
            <b>Status:</b>
            {{ detail.status}}
          </div>
          <div class="modal-footer">
            <Footer :detail="detail" :status="status"></Footer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/modalFooter'
export default {
  components: {
    Footer
  },
  props: ['detail', 'id', 'status']
}
</script>

<style lang="css">
</style>
