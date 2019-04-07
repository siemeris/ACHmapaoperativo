define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-filtro',


      startup: function() {
        this.inherited(arguments);
        _layer = this.map.getLayer("87ae22fa16db413a89c57c191da27eee");
        _layer1 =this.map.getLayer("c1c4a910d3c149818b29e0f5a2a0cdf4");

     },


     _onClick: function(){

        text = this.inputFiltrar.value;
        _layer.setDefinitionExpression("COMMUNE='"+ text +"'");

     },

     // _onClickCentinela: function(){
     //
     //    textCentinela = this.inputFiltrarCentinela.value;
     //    _layer1.setDefinitionExpression("Nom='"+ textCentinela +"'");
     //
     // },
     //
     // _onClickRegion: function(){
     //
     //    textRegion = this.inputFiltrarRegion.value;
     //    _layer.setDefinitionExpression("Region='"+ textRegion +"'");
     //
     // },

     _onClickRestaurar: function(){

        _layer.setDefinitionExpression(_layer.defaultDefinitionExpression);
        // _layer1.setDefinitionExpression(_layer1.defaultDefinitionExpression);




     }



    });
  });
