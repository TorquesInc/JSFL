/**
 * Set the scale 100% and reset the Transformation point for selection.
 * @author  Torques Inc.
 * @version 1.0
 */

fl.outputPanel.clear();
fl.trace( "== Torques-Set100.jsfl ==" );

var selectionArray = fl.getDocumentDOM().selection;
var numSelection   = selectionArray.length;

for( var i=0; i<numSelection; i++ ){
  var element = selectionArray[i];
  
  fl.trace( ">"+element.name +" ("+element.elementType+")" );
  if( element.elementType == "instance" ){
	element.setTransformationPoint({x:0, y:0});
	var mat = element.matrix;
	mat.a = 1;
	mat.b = 0;
	mat.c = 0;
	mat.d = 1;
	element.matrix = mat;
  }
}
