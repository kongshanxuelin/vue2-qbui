<template >
  <div class="flex-row flex-center flex-middle" style="margin-top:50px;">
  	<div class="flex-item-18" style="text-align: center;">
  	<span class="sl-label-yellow">Comming Soon,敬请期待!</span>
  	</div>
  </div>
</template>

<script>


export default {

  data () {
    return {
    }
  },
  methods: {
    callIt: function (obj) {
      var evens = [7, 2, 3, 4, 5, 12]
      var odds = evens.map(v => v + 1)
      console.log('map array:', odds)
      var nums = evens.map((v, i) => v + i)
      console.log('map array 2:', nums)
      var filterArray = evens.filter(item => item > 2)
      console.log('filter array:', filterArray)
      var sortArray = evens.sort((a, b) => a > b)
      console.log('sort array:', sortArray)
      nums.forEach(v => {
        console.log(v)
      })
      // this穿透
      class Cls {
        constructor (w, h) {
          this.w = w
          this.h = h
        }
        addWidth (w) {
          this.w = this.w + w
        }
        addHeight (h) {
          this.h = this.h + h
        }
        static printWidth () {
          console.log(this.w)
        }
      }
      class Cls2 extends Cls {
        addWidth (w) {
          this.w = this.w + 2 * w
        }
      }

      var obj2 = new Cls(2, 3)
      obj2.addWidth(5)
      obj2.addHeight(2)
      console.log(obj2)
      let obj3 = new Cls2(2, 3)
      obj3.addWidth(5)
      obj3.addHeight(2)
      console.log(obj3)
      // Cls.printWidth()
      // 多行字符串
      var name = 'xxx'
      var str = `sss   ${name}   111
       22222`
      console.log(str)
      // 解构
      let [ a, b ] = [1, 2, 3]
      console.log(a === 1, b === 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
	div.hello > div{
	  margin:20px;
	}
</style>
