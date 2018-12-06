/**
 * Created by f on 2018/7/7.
 */
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/debounceTime'
import Vue from 'vue';

const RxEvent = {
    install: function(vue: any) {
        vue.directive("rx-event", RxEventHandler);
    }
}

const RxEventHandler={
    bind (el: any, binding: any, vnode: any) {


        let handle = binding.value;
        const apiurl = binding.arg;
        const streamName = binding.expression;
        const modifiers = binding.modifiers;
        handle = new Promise(function (resolve, reject) {

                resolve('默认参数success');

                reject('默认参数filed');

        })
  /*          function(callback:any) {
            console.log(callback);
            callback("ssssssssssssssssssss")
            //console.log(tag)
            /!*return *!/
        }*/

       /* handle.subscription = Observable.fromEvent(el, 'keyup')
            .debounceTime(1000)
            .subscribe({
                next: function(value) {
                    console.log(value);
                },
                complete: function() {
                    console.log('complete!');
                },
                error: function(error) {
                    console.log(error);
                }
        });*/


     /*    handle =  Observable.fromEvent(el,'keyup')
             .debounceTime(1000)
             .subscribe((event:any)=>{
                 console.log(apiurl + 'searching....');
                 console.log(handle + 'searching....');
                 console.log(handle);
                 console.log(apiurl);
                 console.log(streamName);
                 console.log(modifiers);
                 binding.value="ssssssssssssss"
                 return binding.value="ass"
                 // this.$emit('update:selectData', 'this.deselectData')
             })
*/

    },


    update(el: any, binding: any) {
        // el.value ="aaa";

        //console.log(binding.value)
        // this.$emit('update:selectData', 'this.deselectData')

    },

    unbind (el: any, binding: any) {
    }

}

export default RxEvent;