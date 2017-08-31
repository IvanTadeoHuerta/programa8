<template>
    <div class="container-fluid">
        <div class="app_header">
            <div class="section_header">
                <div class="section_logo">
                    <div class="template_logo"></div>
                </div>
                <div class="section_logo_probosque">
                    <div class="template_logo_probosque"></div>
                </div>
                <div class="section_title_system">Sistema de Información Forestal del Estado de México</div>
                <div class="section_info_user">
                    <div class="option_logout" style="font-size: 96%;">Cerrar sesión</div>
                    <div class="divisor"></div>
                    <div class="user_connected" style="font-size: 96%;">{{ nombreUsuario }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'cabecera',
    props: ['usuario'],
    data(){
        return {
            nombreUsuario: this.usuario
        }
    }
}
</script>

<style  scoped>

.app_header{
    position: relative;
    height: 70px;
    width:100%;
    background: #FFF;
    /*box-shadow:1px 2px 10px 1px #555555;*/
    z-index: 2;
}

.app_header .section_header{
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    
    background-image: url("../assets/header.png");
    background-repeat: repeat-x;
    
    /*background: #F2F1EE;*/
}

.app_header .section_logo{
    position: absolute;
    top: 0px;
    left: 0px;
}

.app_header .section_logo_probosque{
   
  position: absolute;
  bottom: 2px;
  right: 2px;
  
}

.app_header .section_title_system{
    
 position: absolute;
  left: 290px;
  top: 28px;
  /* bottom: 0px; */
  width: 240px;
  color: #000000;
  font-size: 12px;
  line-height: 19px;
  font-family: Arial, SoberanaSans_titular_bold;
  font-weight: bold;
  text-align: left;
}

.template_logo_probosque {
    display:block;background-image:url(../assets/probosque.png);overflow:hidden;
    width: 250px;
    height: 41px;
    
}
.section_info_user{
    position: absolute;
    top:0px;
    right:0px;
}
.section_info_user .user_connected{
    float: right;
    color: #D7D7D7;
    cursor: default;
    line-height: 22px;
    font-size: 110%;
    font-weight: bolder;
    margin-right: 20px;
}

.section_info_user .option_logout{
    float: right;
    color: #D7D7D7;
    font-size: 110%;
    line-height: 22px;
    margin-right: 12px;
    font-weight: bolder;
    cursor: pointer;
}
.section_info_user .divisor{
    float: right;
  width: 1px;
  height: 16px;
  background: #D7D7D7;
  margin-top: 3px;
  margin-right: 15px;
}

.template_logo {
    display:block;background-image:url('../assets/logo.png');overflow:hidden;
    width: 315px;
    height: 70px;
    
}
</style>
