<template>
  <div class="notepad">
    <div class="notpad--nav"></div>
    <div class="notepad--body">
      <div id="#notepad-text">
        <div contenteditable="true" @input="update"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: '#notepad-text',
  props: {
    content: {
      type: String,
      default: ''
    }
  },
  //   data: function() {
  //     return {
  //       text: 'This text is editable!'
  //     }
  //   },
  mounted: function() {
    this.$el.innerText = this.content
  },
  methods: {
    update: function(event) {
      this.$emit('update', event.target.innerText)
    }
  }
}
</script>

//
<div id="example">
//   <editable :content="text" @update="text = $event"></editable>
//   <div>
//     <pre>{{$data |json }}</pre>
//   </div>
// </div>
// Vue.component('editable',{ // template:'
<div contenteditable="true" @input="update"></div>
', // props:['content'], // mounted:function(){ // this.$el.innerText =
this.content; // }, // methods:{ // update:function(event){ //
this.$emit('update',event.target.innerText); // } // } // }) // var example =
new Vue({ // el: '#example', // data: { // text:"This text is editable!" // } //
});
