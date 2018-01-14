<template>
    <div id="hello">
        <div class="btn" v-if="isButton">
            <span class="btn_text" @click="handleClick">点击</span>
        </div>
        <div class="msg" v-else>
            <p class="msg_title">Vue&Webpack</p>
            <ul class="msg_ul">
                <li class="msg_li" v-for="one in message">
                    <div class="msg_box" :class="{mine_msg:one.from === 'me'}">
                        <span class="msg_bg_angle"></span>
                        <span class="msg_bg">{{one.msg}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            isButton: true
        };
    },
    computed: {
        ...mapGetters(['message'])
    },
    methods: {
        ...mapActions(['click']),
        handleClick: function() {
            this.isButton = false;
            this.click();
        }
    }
};
</script>

<style lang="scss" scoped>
#hello {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
        text-align: center;
        .btn_text {
            font-size: 45px;
            cursor: default;
        }
    }
    .msg {
        width: 100%;
        height: 100%;
        position: relative;
        .msg_title{
            margin: 0;
            font-size: 45px;
            text-align: center;
            padding: 35px;
            cursor: default;
        }
        .msg_ul {
            padding: 0px;
            margin: 0px;
            position: absolute;
            top: 150px;
            left: calc(50% - 250px);
            width: 500px;
            .msg_li {
                list-style: none;
                padding-bottom: 60px;
                .msg_box {
                    position: relative;
                    display: flex;
                    .msg_bg {
                        background-color: #ffffff;
                        padding: 5px 15px;
                        border-radius: 3px;
                        cursor: default;
                        font-size: 25px;
                        font-weight: 200;
                    }
                    .msg_bg_angle {
                        position: absolute;
                        top: 12px;
                        left: -29px;
                        height: 0px;
                        border-width: 12px 15px;
                        border-style: solid;
                        border-color: transparent #ffffff transparent
                            transparent;
                    }
                    &.mine_msg {
                        display: flex;
                        justify-content: flex-end;
                        .msg_bg_angle {
                            left: initial;
                            right: -29px;
                            border-color: transparent transparent transparent
                                #ffffff;
                        }
                    }
                }
            }
        }
    }
}
</style>




