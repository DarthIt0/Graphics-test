const a0_0x3b3a0b=a0_0x4896;function a0_0x47ed(){const _0x4d8df3=['ACTIVE_UNIFORMS','7972860MTzZFM','Shader\x20compilation\x20failed:\x20','unshift','100%','cos','2316246Llzsiz','TEXTURE_MAG_FILTER','height','DYNAMIC_DRAW','ARRAY_BUFFER','getUniformLocation','error','COMPILE_STATUS','3065448zrJygX','DEPTH_BUFFER_BIT','getActiveUniform','clientWidth','2090uRIpya','random','load','createProgram','clear','getShaderInfoLog','name','bindBuffer','TEXTURE_WRAP_T','DOMContentLoaded','24fDzCHQ','ELEMENT_ARRAY_BUFFER','deleteShader','240hqXkue','sqrt','target','768321blNKTe','FRAGMENT_SHADER','#faults','#generate','uniform4f','uniform3fv','push','querySelector','acos','getShaderParameter','texImage2D','sin','LINEAR','#gridsize','RGBA','TEXTURE_2D','uColor','map','MAX_VALUE','addEventListener','getProgramParameter','min','anonymous','indices','vertexAttribPointer','UNSIGNED_BYTE','trim','UNSIGNED_SHORT','CLAMP_TO_EDGE','FLOAT','uniform1i','max','uLightColor','uViewPosition','reduce','deleteProgram','DEPTH_TEST','webgl2','bindTexture','uniforms','width','fill','#version\x20300\x20es\x0alayout(location\x20=\x200)\x20in\x20vec3\x20aPosition;\x0alayout(location\x20=\x201)\x20in\x20vec3\x20aNormal;\x20\x20\x20\x0auniform\x20mat4\x20uModelViewMatrix;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20mat4\x20uProjectionMatrix;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec3\x20vNormal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec3\x20vPosition;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0avoid\x20main()\x20{\x0a\x20\x20\x20\x20vNormal\x20=\x20aNormal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20vPosition\x20=\x20(uModelViewMatrix\x20*\x20vec4(aPosition,\x201.0)).xyz;\x20\x20\x0a\x20\x20\x20\x20gl_Position\x20=\x20uProjectionMatrix\x20*\x20vec4(vPosition,\x201.0);\x20\x20\x0a}\x0a','canvas','116705rdttzU','bufferData','length','TEXTURE0','slice','enableVertexAttribArray','Shader\x20compilation\x20failed','createShader','157ljtODm','viewport','test','texParameteri','style','LINEAR_MIPMAP_LINEAR','uProjectionMatrix','LINK_STATUS','uniformMatrix4fv','VERTEX_SHADER','COLOR_BUFFER_BIT','clientHeight','createBuffer','useProgram','uTexture','attachShader','#version\x20300\x20es\x0aprecision\x20highp\x20float;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0ain\x20vec3\x20vNormal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0ain\x20vec3\x20vPosition;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec4\x20uColor;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec3\x20uLightDirection;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec3\x20uViewPosition;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec3\x20uLightColor;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec4\x20fragColor;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0avoid\x20main()\x20{\x0a\x20\x20\x20\x20vec3\x20normal\x20=\x20normalize(vNormal);\x20\x20\x20\x20\x0a\x20\x20\x20\x20vec3\x20lightDir\x20=\x20normalize(uLightDirection);\x20\x0a\x20\x20\x20\x20float\x20diffuseIntensity\x20=\x20max(dot(normal,\x20lightDir),\x200.0);\x20\x0a\x20\x20\x20\x20vec3\x20diffuseLight\x20=\x20diffuseIntensity\x20*\x20uLightColor\x20*\x20(1.0\x20-\x20uColor.a);\x0a\x20\x20\x20\x20vec3\x20viewDir\x20=\x20normalize(uViewPosition\x20-\x20vPosition);\x0a\x20\x20\x20\x20vec3\x20reflectDir\x20=\x20reflect(-lightDir,\x20normal);\x0a\x20\x20\x20\x20float\x20specularIntensity\x20=\x20pow(max(dot(viewDir,\x20reflectDir),\x200.0),\x2032.0);\x0a\x20\x20\x20\x20vec3\x20specularLight\x20=\x20uLightColor\x20*\x20uColor.a\x20*\x203.0\x20*\x20specularIntensity;\x20\x20\x20\x0a\x20\x20\x20\x20fragColor\x20=\x20vec4((uColor.rgb\x20*\x20diffuseLight)\x20+\x20specularLight,\x201.0);\x0a}\x0a','constructor','Program\x20linking\x20failed','35851330qmWySy','crossOrigin','src','getProgramInfoLog','value','tan','#material','getContext','Program\x20linking\x20failed:\x20','#version\x20300\x20es\x0alayout(location\x20=\x200)\x20in\x20vec3\x20aPosition;\x0alayout(location\x20=\x201)\x20in\x20vec3\x20aNormal;\x20\x20\x20\x20\x0alayout(location\x20=\x202)\x20in\x20vec2\x20aTexCoord;\x20\x20\x0auniform\x20mat4\x20uModelViewMatrix;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20mat4\x20uProjectionMatrix;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec3\x20vNormal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec3\x20vPosition;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec2\x20vTexCoord;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0avoid\x20main()\x20{\x0a\x20\x20\x20\x20vNormal\x20=\x20aNormal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20vPosition\x20=\x20(uModelViewMatrix\x20*\x20vec4(aPosition,\x201.0)).xyz;\x20\x0a\x20\x20\x20\x20vTexCoord\x20=\x20aTexCoord;\x20\x20\x0a\x20\x20\x20\x20gl_Position\x20=\x20uProjectionMatrix\x20*\x20vec4(vPosition,\x201.0);\x20\x20\x0a}\x0a','uLightDirection','linkProgram','substr'];a0_0x47ed=function(){return _0x4d8df3;};return a0_0x47ed();}(function(_0x2a6201,_0xdfda9e){const _0x436a03=a0_0x4896,_0x48de22=_0x2a6201();while(!![]){try{const _0x6e0a48=parseInt(_0x436a03(0x246))/0x1*(parseInt(_0x436a03(0x202))/0x2)+parseInt(_0x436a03(0x1fe))/0x3+-parseInt(_0x436a03(0x20f))/0x4*(-parseInt(_0x436a03(0x23e))/0x5)+parseInt(_0x436a03(0x1f6))/0x6+parseInt(_0x436a03(0x1f1))/0x7+-parseInt(_0x436a03(0x20c))/0x8*(-parseInt(_0x436a03(0x212))/0x9)+-parseInt(_0x436a03(0x1e3))/0xa;if(_0x6e0a48===_0xdfda9e)break;else _0x48de22['push'](_0x48de22['shift']());}catch(_0x1d56dc){_0x48de22['push'](_0x48de22['shift']());}}}(a0_0x47ed,0xbf000));let gl,terrainProgram,terrainData,textureProgram,materialTexture,currentProgram,vertexBuffer,normalBuffer,indexBuffer,texCoordBuffer,rotationZ=0x0;const rotationSpeed=0.03;let isUsingTexture=![];document['addEventListener'](a0_0x3b3a0b(0x20b),()=>{const _0x43a96b=a0_0x3b3a0b,_0x5b2e0c=document[_0x43a96b(0x219)](_0x43a96b(0x23d));gl=_0x5b2e0c[_0x43a96b(0x1ea)](_0x43a96b(0x237)),window[_0x43a96b(0x225)]('resize',fillScreen),fillScreen(),terrainProgram=compileShader(vertexShaderSrc,fragmentShaderSrc),textureProgram=compileShader(vertexShaderTextureSrc,fragmentShaderTextureSrc),!isUsingTexture&&(currentProgram=terrainProgram,gl['useProgram'](currentProgram),gl[_0x43a96b(0x216)](currentProgram[_0x43a96b(0x239)]['uColor'],0x1,0x1,0x1,0.3)),defaultGridSize=0x32,defaultFaults=0xfa,terrainData=generateTerrain(defaultGridSize,defaultFaults),initBuffers(),updateBuffers(),render(),document[_0x43a96b(0x219)](_0x43a96b(0x215))[_0x43a96b(0x225)]('click',()=>{const _0x4558f3=_0x43a96b,_0x5d1207=Number(document[_0x4558f3(0x219)](_0x4558f3(0x21f))[_0x4558f3(0x1e7)]),_0x27ba1f=Number(document[_0x4558f3(0x219)](_0x4558f3(0x214))[_0x4558f3(0x1e7)]),_0x31f18a=Math[_0x4558f3(0x231)](0x2,Math[_0x4558f3(0x227)](0xff,isNaN(_0x5d1207)?defaultGridSize:_0x5d1207)),_0x2a8e73=Math['max'](0x0,isNaN(_0x27ba1f)?defaultFaults:_0x27ba1f);document[_0x4558f3(0x219)](_0x4558f3(0x21f))[_0x4558f3(0x1e7)]=_0x31f18a,document[_0x4558f3(0x219)](_0x4558f3(0x214))[_0x4558f3(0x1e7)]=_0x2a8e73,terrainData=generateTerrain(_0x31f18a,_0x2a8e73),updateBuffers();}),document[_0x43a96b(0x219)](_0x43a96b(0x1e9))[_0x43a96b(0x225)]('input',handleMaterialInput),requestAnimationFrame(animate);});function animate(){render(),requestAnimationFrame(animate);}const vertexShaderSrc=a0_0x3b3a0b(0x23c),fragmentShaderSrc=a0_0x3b3a0b(0x1e0),vertexShaderTextureSrc=a0_0x3b3a0b(0x1ec),fragmentShaderTextureSrc='#version\x20300\x20es\x0aprecision\x20highp\x20float;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0ain\x20vec2\x20vTexCoord;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20sampler2D\x20uTexture;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec3\x20uLightDirection;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0auniform\x20vec3\x20uLightColor;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0aout\x20vec4\x20fragColor;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0avoid\x20main()\x20{\x0a\x20\x20\x20\x20vec4\x20texColor\x20=\x20texture(uTexture,\x20vTexCoord);\x0a\x20\x20\x20\x20vec3\x20normal\x20=\x20vec3(0.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20float\x20diffuseIntensity\x20=\x20max(dot(normal,\x20normalize(uLightDirection)),\x200.0);\x0a\x20\x20\x20\x20vec3\x20diffuseLight\x20=\x20diffuseIntensity\x20*\x20uLightColor\x20*\x20texColor.rgb;\x0a\x20\x20\x20\x20fragColor\x20=\x20vec4(diffuseLight,\x201.0);\x0a}\x0a';function fillScreen(){const _0x1a1cb4=a0_0x3b3a0b,_0x4c8e0f=document[_0x1a1cb4(0x219)](_0x1a1cb4(0x23d));_0x4c8e0f[_0x1a1cb4(0x24a)][_0x1a1cb4(0x23a)]=_0x1a1cb4(0x1f4),_0x4c8e0f['style']['height']=_0x1a1cb4(0x1f4),_0x4c8e0f[_0x1a1cb4(0x23a)]=_0x4c8e0f[_0x1a1cb4(0x201)],_0x4c8e0f[_0x1a1cb4(0x1f8)]=_0x4c8e0f[_0x1a1cb4(0x251)],gl[_0x1a1cb4(0x247)](0x0,0x0,_0x4c8e0f[_0x1a1cb4(0x23a)],_0x4c8e0f['height']);}function compileShader(_0xc05b21,_0x111f0b){const _0x36688c=a0_0x3b3a0b,_0x3f1c5a=createShader(gl[_0x36688c(0x24f)],_0xc05b21),_0x23a07a=createShader(gl[_0x36688c(0x213)],_0x111f0b),_0x99284d=createProgram(_0x3f1c5a,_0x23a07a);gl['useProgram'](_0x99284d);const _0x1e342f={};for(let _0x540d80=0x0;_0x540d80<gl[_0x36688c(0x226)](_0x99284d,gl[_0x36688c(0x1f0)]);_0x540d80+=0x1){const _0x3f0aaf=gl[_0x36688c(0x200)](_0x99284d,_0x540d80);_0x1e342f[_0x3f0aaf[_0x36688c(0x208)]]=gl[_0x36688c(0x1fb)](_0x99284d,_0x3f0aaf[_0x36688c(0x208)]);}return _0x99284d[_0x36688c(0x239)]=_0x1e342f,_0x99284d;}function createShader(_0x3c1cb9,_0xd75bae){const _0xbc13e6=a0_0x3b3a0b,_0x5d8ca3=gl[_0xbc13e6(0x245)](_0x3c1cb9);gl['shaderSource'](_0x5d8ca3,_0xd75bae),gl['compileShader'](_0x5d8ca3);if(!gl[_0xbc13e6(0x21b)](_0x5d8ca3,gl[_0xbc13e6(0x1fd)])){console[_0xbc13e6(0x1fc)](_0xbc13e6(0x1f2)+gl[_0xbc13e6(0x207)](_0x5d8ca3)),gl[_0xbc13e6(0x20e)](_0x5d8ca3);throw new Error(_0xbc13e6(0x244));}return _0x5d8ca3;}function createProgram(_0xbf20fe,_0x115ce7){const _0x4aab68=a0_0x3b3a0b,_0x3263b5=gl[_0x4aab68(0x205)]();gl['attachShader'](_0x3263b5,_0xbf20fe),gl[_0x4aab68(0x255)](_0x3263b5,_0x115ce7),gl[_0x4aab68(0x1ee)](_0x3263b5);if(!gl[_0x4aab68(0x226)](_0x3263b5,gl[_0x4aab68(0x24d)])){console[_0x4aab68(0x1fc)](_0x4aab68(0x1eb)+gl[_0x4aab68(0x1e6)](_0x3263b5)),gl[_0x4aab68(0x235)](_0x3263b5);throw new Error(_0x4aab68(0x1e2));}return _0x3263b5;}function generateTerrain(_0x2232fe,_0xaed4b0){const _0x35811b=a0_0x3b3a0b;let _0x3088b0=[],_0x5ee76a=[],_0x6b7e5f=0x2/(_0x2232fe-0x1);for(let _0x2a4c2e=0x0;_0x2a4c2e<_0x2232fe;_0x2a4c2e++){for(let _0x4df8c5=0x0;_0x4df8c5<_0x2232fe;_0x4df8c5++){_0x3088b0[_0x35811b(0x218)](-0x1+_0x4df8c5*_0x6b7e5f,-0x1+_0x2a4c2e*_0x6b7e5f,0x0);if(_0x2a4c2e<_0x2232fe-0x1&&_0x4df8c5<_0x2232fe-0x1){let _0x245325=_0x2a4c2e*_0x2232fe+_0x4df8c5;_0x5ee76a[_0x35811b(0x218)](_0x245325,_0x245325+_0x2232fe,_0x245325+0x1),_0x5ee76a[_0x35811b(0x218)](_0x245325+0x1,_0x245325+_0x2232fe,_0x245325+_0x2232fe+0x1);}}}if(_0xaed4b0>0x0){for(let _0x99515=0x0;_0x99515<_0xaed4b0;_0x99515++){applyFault(_0x3088b0,_0x2232fe);}normalizeTerrain(_0x3088b0);}let _0x4e75a5=computeNormals(_0x3088b0,_0x2232fe);if(_0xaed4b0===0x0)for(let _0xe39d54=0x0;_0xe39d54<_0x4e75a5[_0x35811b(0x240)];_0xe39d54+=0x3){_0x4e75a5[_0xe39d54]=0x0,_0x4e75a5[_0xe39d54+0x1]=0x0,_0x4e75a5[_0xe39d54+0x2]=0x1;}return{'vertices':_0x3088b0,'indices':_0x5ee76a,'normals':_0x4e75a5};}function applyFault(_0x435294,_0x23095f){const _0x14b123=a0_0x3b3a0b,_0x212c91=Math[_0x14b123(0x203)]()*0x2-0x1,_0x19f57b=Math[_0x14b123(0x203)]()*0x2-0x1,_0x5065a5=Math['random']()*0x2-0x1;for(let _0x949cba=0x0;_0x949cba<_0x435294[_0x14b123(0x240)];_0x949cba+=0x3){const _0x2bbf4f=_0x435294[_0x949cba],_0x295c84=_0x435294[_0x949cba+0x1];_0x212c91*_0x2bbf4f+_0x19f57b*_0x295c84+_0x5065a5>0x0?_0x435294[_0x949cba+0x2]+=0.05:_0x435294[_0x949cba+0x2]-=0.05;}}function normalizeTerrain(_0x2c2132){const _0x13d0c3=a0_0x3b3a0b;let _0x1cb725=Infinity,_0x2c68e7=-Infinity;for(let _0x3ef9de=0x2;_0x3ef9de<_0x2c2132[_0x13d0c3(0x240)];_0x3ef9de+=0x3){if(_0x2c2132[_0x3ef9de]<_0x1cb725)_0x1cb725=_0x2c2132[_0x3ef9de];if(_0x2c2132[_0x3ef9de]>_0x2c68e7)_0x2c68e7=_0x2c2132[_0x3ef9de];}const _0x24ab11=_0x2c68e7-_0x1cb725;if(_0x24ab11>0x0){const _0x2d43a0=0x1;for(let _0x4571f7=0x2;_0x4571f7<_0x2c2132[_0x13d0c3(0x240)];_0x4571f7+=0x3){_0x2c2132[_0x4571f7]=_0x2d43a0*((_0x2c2132[_0x4571f7]-_0x1cb725)/_0x24ab11-0.5);}}}function a0_0x4896(_0x8fb9df,_0x4c2211){const _0x47edc0=a0_0x47ed();return a0_0x4896=function(_0x4896a5,_0x410527){_0x4896a5=_0x4896a5-0x1e0;let _0x1dda5d=_0x47edc0[_0x4896a5];return _0x1dda5d;},a0_0x4896(_0x8fb9df,_0x4c2211);}function computeNormals(_0xc0b548,_0x513689){const _0x1f58b8=a0_0x3b3a0b;let _0x429b27=new Array(_0xc0b548['length'])[_0x1f58b8(0x23b)](0x0);for(let _0x247e5e=0x0;_0x247e5e<_0x513689;_0x247e5e++){for(let _0x4925ac=0x0;_0x4925ac<_0x513689;_0x4925ac++){let _0x1c2e08=(_0x247e5e*_0x513689+_0x4925ac)*0x3,_0x5aed81=_0x247e5e>0x0?_0x1c2e08-_0x513689*0x3:_0x1c2e08,_0x317831=_0x247e5e<_0x513689-0x1?_0x1c2e08+_0x513689*0x3:_0x1c2e08,_0x3328c6=_0x4925ac>0x0?_0x1c2e08-0x3:_0x1c2e08,_0x437e91=_0x4925ac<_0x513689-0x1?_0x1c2e08+0x3:_0x1c2e08,_0x552d3b=[_0xc0b548[_0x317831]-_0xc0b548[_0x5aed81],_0xc0b548[_0x317831+0x1]-_0xc0b548[_0x5aed81+0x1],_0xc0b548[_0x317831+0x2]-_0xc0b548[_0x5aed81+0x2]],_0x424d51=[_0xc0b548[_0x3328c6]-_0xc0b548[_0x437e91],_0xc0b548[_0x3328c6+0x1]-_0xc0b548[_0x437e91+0x1],_0xc0b548[_0x3328c6+0x2]-_0xc0b548[_0x437e91+0x2]],_0x3d59f1=[_0x552d3b[0x1]*_0x424d51[0x2]-_0x552d3b[0x2]*_0x424d51[0x1],_0x552d3b[0x2]*_0x424d51[0x0]-_0x552d3b[0x0]*_0x424d51[0x2],_0x552d3b[0x0]*_0x424d51[0x1]-_0x552d3b[0x1]*_0x424d51[0x0]],_0x2e952b=Math[_0x1f58b8(0x210)](_0x3d59f1[0x0]**0x2+_0x3d59f1[0x1]**0x2+_0x3d59f1[0x2]**0x2);_0x2e952b>0x0&&(_0x3d59f1=_0x3d59f1[_0x1f58b8(0x223)](_0x39aa48=>_0x39aa48/_0x2e952b)),_0x429b27[_0x1c2e08]=_0x3d59f1[0x0],_0x429b27[_0x1c2e08+0x1]=_0x3d59f1[0x1],_0x429b27[_0x1c2e08+0x2]=_0x3d59f1[0x2];}}return _0x429b27;}function handleMaterialInput(_0xf0a59b){const _0x581a23=a0_0x3b3a0b,_0xfb719a=_0xf0a59b[_0x581a23(0x211)][_0x581a23(0x1e7)][_0x581a23(0x22c)]();if(_0xfb719a==='')isUsingTexture=![],currentProgram=terrainProgram,gl['useProgram'](currentProgram),gl[_0x581a23(0x216)](currentProgram[_0x581a23(0x239)][_0x581a23(0x222)],0x1,0x1,0x1,0.3);else{if(/^#[0-9a-fA-F]{8}$/[_0x581a23(0x248)](_0xfb719a)){const _0x4f06fb=parseInt(_0xfb719a[_0x581a23(0x1ef)](0x1,0x2),0x10)/0xff,_0x18921d=parseInt(_0xfb719a[_0x581a23(0x1ef)](0x3,0x2),0x10)/0xff,_0x445fea=parseInt(_0xfb719a[_0x581a23(0x1ef)](0x5,0x2),0x10)/0xff,_0x3f75e8=parseInt(_0xfb719a['substr'](0x7,0x2),0x10)/0xff;isUsingTexture=![],currentProgram=terrainProgram,gl['useProgram'](currentProgram),gl[_0x581a23(0x216)](currentProgram[_0x581a23(0x239)][_0x581a23(0x222)],_0x4f06fb,_0x18921d,_0x445fea,_0x3f75e8);}else/\.(jpg|png)$/[_0x581a23(0x248)](_0xfb719a)?loadTexture(_0xfb719a):(isUsingTexture=![],currentProgram=terrainProgram,gl[_0x581a23(0x253)](currentProgram),gl[_0x581a23(0x216)](currentProgram[_0x581a23(0x239)][_0x581a23(0x222)],0x1,0x1,0x1,0.3));}}function loadTexture(_0x1b4758){const _0x4c6ebc=a0_0x3b3a0b,_0x2c53c0=new Image();_0x2c53c0[_0x4c6ebc(0x1e4)]=_0x4c6ebc(0x228),_0x2c53c0[_0x4c6ebc(0x1e5)]=_0x1b4758,_0x2c53c0[_0x4c6ebc(0x225)](_0x4c6ebc(0x204),()=>{const _0x464a72=_0x4c6ebc;materialTexture=gl['createTexture'](),gl['activeTexture'](gl['TEXTURE0']),gl[_0x464a72(0x238)](gl[_0x464a72(0x221)],materialTexture),gl[_0x464a72(0x21c)](gl[_0x464a72(0x221)],0x0,gl[_0x464a72(0x220)],gl['RGBA'],gl[_0x464a72(0x22b)],_0x2c53c0),gl['generateMipmap'](gl['TEXTURE_2D']),gl[_0x464a72(0x249)](gl[_0x464a72(0x221)],gl['TEXTURE_WRAP_S'],gl[_0x464a72(0x22e)]),gl['texParameteri'](gl['TEXTURE_2D'],gl[_0x464a72(0x20a)],gl[_0x464a72(0x22e)]),gl['texParameteri'](gl[_0x464a72(0x221)],gl['TEXTURE_MIN_FILTER'],gl[_0x464a72(0x24b)]),gl['texParameteri'](gl[_0x464a72(0x221)],gl[_0x464a72(0x1f7)],gl[_0x464a72(0x21e)]),isUsingTexture=!![],currentProgram=textureProgram,gl[_0x464a72(0x253)](currentProgram),gl['uniform1i'](currentProgram[_0x464a72(0x239)][_0x464a72(0x254)],0x0);}),_0x2c53c0[_0x4c6ebc(0x225)]('error',()=>{const _0x256acd=_0x4c6ebc;isUsingTexture=![],currentProgram=terrainProgram,gl[_0x256acd(0x253)](currentProgram),gl['uniform4f'](currentProgram[_0x256acd(0x239)][_0x256acd(0x222)],0x1,0x0,0x1,0x0);});}function generateTexCoords(_0x1d8de2){const _0x7413fe=a0_0x3b3a0b,_0x2d617e=new Float32Array(_0x1d8de2['length']/0x3*0x2);let _0x45a57e=Number[_0x7413fe(0x224)],_0x43c432=-Number[_0x7413fe(0x224)],_0x4d874e=Number[_0x7413fe(0x224)],_0x5f19b4=-Number[_0x7413fe(0x224)];for(let _0x4ade99=0x0;_0x4ade99<_0x1d8de2[_0x7413fe(0x240)];_0x4ade99+=0x3){const _0x24f9a2=_0x1d8de2[_0x4ade99],_0x1c9356=_0x1d8de2[_0x4ade99+0x1];if(_0x24f9a2<_0x45a57e)_0x45a57e=_0x24f9a2;if(_0x24f9a2>_0x43c432)_0x43c432=_0x24f9a2;if(_0x1c9356<_0x4d874e)_0x4d874e=_0x1c9356;if(_0x1c9356>_0x5f19b4)_0x5f19b4=_0x1c9356;}for(let _0x1233e5=0x0;_0x1233e5<_0x1d8de2[_0x7413fe(0x240)];_0x1233e5+=0x3){const _0xde796f=_0x1d8de2[_0x1233e5],_0x4a6daf=_0x1d8de2[_0x1233e5+0x1],_0x2e110b=(_0xde796f-_0x45a57e)/(_0x43c432-_0x45a57e),_0x15cc3a=(_0x4a6daf-_0x4d874e)/(_0x5f19b4-_0x4d874e);_0x2d617e[_0x1233e5/0x3*0x2]=_0x2e110b,_0x2d617e[_0x1233e5/0x3*0x2+0x1]=_0x15cc3a;}return _0x2d617e;}function initBuffers(){const _0x1fe60b=a0_0x3b3a0b;vertexBuffer=gl['createBuffer'](),normalBuffer=gl[_0x1fe60b(0x252)](),indexBuffer=gl[_0x1fe60b(0x252)](),texCoordBuffer=gl[_0x1fe60b(0x252)]();}function updateBuffers(){const _0x4ff259=a0_0x3b3a0b,{vertices:_0x411b60,indices:_0x54bfa0,normals:_0x2e4d17}=terrainData,_0x208e20=generateTexCoords(_0x411b60);gl[_0x4ff259(0x209)](gl[_0x4ff259(0x1fa)],vertexBuffer),gl[_0x4ff259(0x23f)](gl[_0x4ff259(0x1fa)],new Float32Array(_0x411b60),gl[_0x4ff259(0x1f9)]),gl[_0x4ff259(0x209)](gl[_0x4ff259(0x1fa)],normalBuffer),gl[_0x4ff259(0x23f)](gl[_0x4ff259(0x1fa)],new Float32Array(_0x2e4d17),gl[_0x4ff259(0x1f9)]),gl[_0x4ff259(0x209)](gl['ELEMENT_ARRAY_BUFFER'],indexBuffer),gl['bufferData'](gl[_0x4ff259(0x20d)],new Uint16Array(_0x54bfa0),gl[_0x4ff259(0x1f9)]),gl[_0x4ff259(0x209)](gl[_0x4ff259(0x1fa)],texCoordBuffer),gl[_0x4ff259(0x23f)](gl['ARRAY_BUFFER'],new Float32Array(_0x208e20),gl[_0x4ff259(0x1f9)]);}function render(){const _0x1d276e=a0_0x3b3a0b;if(!terrainData)return;gl[_0x1d276e(0x206)](gl[_0x1d276e(0x250)]|gl[_0x1d276e(0x1ff)]),gl['enable'](gl[_0x1d276e(0x236)]),gl[_0x1d276e(0x253)](currentProgram),rotationZ+=rotationSpeed;isUsingTexture?(gl[_0x1d276e(0x209)](gl[_0x1d276e(0x1fa)],vertexBuffer),gl[_0x1d276e(0x22a)](0x0,0x3,gl['FLOAT'],![],0x0,0x0),gl[_0x1d276e(0x243)](0x0),gl['bindBuffer'](gl[_0x1d276e(0x1fa)],normalBuffer),gl['vertexAttribPointer'](0x1,0x3,gl['FLOAT'],![],0x0,0x0),gl[_0x1d276e(0x243)](0x1),gl[_0x1d276e(0x209)](gl[_0x1d276e(0x1fa)],texCoordBuffer),gl[_0x1d276e(0x22a)](0x2,0x2,gl[_0x1d276e(0x22f)],![],0x0,0x0),gl[_0x1d276e(0x243)](0x2)):(gl[_0x1d276e(0x209)](gl[_0x1d276e(0x1fa)],vertexBuffer),gl[_0x1d276e(0x22a)](0x0,0x3,gl[_0x1d276e(0x22f)],![],0x0,0x0),gl[_0x1d276e(0x243)](0x0),gl['bindBuffer'](gl['ARRAY_BUFFER'],normalBuffer),gl[_0x1d276e(0x22a)](0x1,0x3,gl[_0x1d276e(0x22f)],![],0x0,0x0),gl[_0x1d276e(0x243)](0x1));const _0x33152c=m4perspNegZ(0.1,0x64,Math['PI']/0x4,gl[_0x1d276e(0x23d)][_0x1d276e(0x23a)],gl['canvas'][_0x1d276e(0x1f8)]);gl['uniformMatrix4fv'](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x24c)],![],_0x33152c);const _0x34d834=[0x0,0x3,-0x1],_0x1a971e=[0x0,0x0,0x0],_0x5e770d=[0x0,0x0,-0x1],_0xf03da7=m4view(_0x34d834,_0x1a971e,_0x5e770d),_0x44615f=m4rotZ(rotationZ),_0x38c002=m4mul(_0xf03da7,_0x44615f);gl[_0x1d276e(0x24e)](currentProgram[_0x1d276e(0x239)]['uModelViewMatrix'],![],_0x38c002);if(isUsingTexture){const _0x24b5d0=normalize([0x3,0x4,0x1f4]);gl['uniform3fv'](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x1ed)],_0x24b5d0);const _0x241582=[0x1,0x1,0x1];gl[_0x1d276e(0x217)](currentProgram['uniforms'][_0x1d276e(0x232)],_0x241582),gl['activeTexture'](gl[_0x1d276e(0x241)]),gl['bindTexture'](gl[_0x1d276e(0x221)],materialTexture),gl[_0x1d276e(0x230)](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x254)],0x0);}else{const _0xe65590=normalize([0x3,0x4,0x1f4]);gl[_0x1d276e(0x217)](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x1ed)],_0xe65590);const _0x200899=[0x1,0x1,0x1];gl['uniform3fv'](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x232)],_0x200899);}gl[_0x1d276e(0x217)](currentProgram[_0x1d276e(0x239)][_0x1d276e(0x233)],_0x34d834),gl['drawElements'](gl['TRIANGLES'],terrainData[_0x1d276e(0x229)][_0x1d276e(0x240)],gl[_0x1d276e(0x22d)],0x0);}const add=(_0x25708e,_0x5f3ac2)=>_0x25708e[a0_0x3b3a0b(0x223)]((_0x52eb7f,_0x13ae7e)=>_0x52eb7f+_0x5f3ac2[_0x13ae7e]),sub=(_0x354bfe,_0x449b49)=>_0x354bfe[a0_0x3b3a0b(0x223)]((_0x3912da,_0x4f158f)=>_0x3912da-_0x449b49[_0x4f158f]),mul=(_0x4f379f,_0x536483)=>_0x4f379f['map'](_0x310aa5=>_0x310aa5*_0x536483),div=(_0x27b9df,_0x4695f2)=>_0x27b9df[a0_0x3b3a0b(0x223)](_0x38b882=>_0x38b882/_0x4695f2),dot=(_0x2db79c,_0x4fcfc5)=>_0x2db79c[a0_0x3b3a0b(0x223)]((_0x5b4416,_0x4f0dc5)=>_0x5b4416*_0x4fcfc5[_0x4f0dc5])[a0_0x3b3a0b(0x234)]((_0x52e249,_0x17db6c)=>_0x52e249+_0x17db6c),mag=_0x1f9004=>Math['sqrt'](dot(_0x1f9004,_0x1f9004)),normalize=_0x3b85d4=>div(_0x3b85d4,mag(_0x3b85d4)),cross=(_0x47c0db,_0x438d21)=>_0x47c0db[a0_0x3b3a0b(0x240)]==0x2?_0x47c0db[0x0]*_0x438d21[0x1]-_0x47c0db[0x1]*_0x438d21[0x0]:_0x47c0db[a0_0x3b3a0b(0x223)]((_0x36dd2a,_0x47e4c1)=>_0x47c0db[(_0x47e4c1+0x1)%0x3]*_0x438d21[(_0x47e4c1+0x2)%0x3]-_0x47c0db[(_0x47e4c1+0x2)%0x3]*_0x438d21[(_0x47e4c1+0x1)%0x3]),m4row=(_0x1fedaa,_0x82ee8b)=>new _0x1fedaa[(a0_0x3b3a0b(0x1e1))](0x4)[a0_0x3b3a0b(0x223)]((_0x2f5840,_0x550fa3)=>_0x1fedaa[_0x82ee8b+0x4*_0x550fa3]),m4rowdot=(_0x13f269,_0x58dbbe,_0x4fc9ef)=>_0x13f269[_0x58dbbe]*_0x4fc9ef[0x0]+_0x13f269[_0x58dbbe+0x4]*_0x4fc9ef[0x1]+_0x13f269[_0x58dbbe+0x8]*_0x4fc9ef[0x2]+_0x13f269[_0x58dbbe+0xc]*_0x4fc9ef[0x3],m4col=(_0x162e9,_0x5982bb)=>_0x162e9[a0_0x3b3a0b(0x242)](_0x5982bb*0x4,(_0x5982bb+0x1)*0x4),m4transpose=_0x34afe1=>_0x34afe1[a0_0x3b3a0b(0x223)]((_0x3e7c9b,_0x5693eb)=>_0x34afe1[((_0x5693eb&0x3)<<0x2)+(_0x5693eb>>0x2)]),m4mul=(..._0x4d2403)=>_0x4d2403[a0_0x3b3a0b(0x234)]((_0xbb980,_0xd3808d)=>{const _0x39fc2c=a0_0x3b3a0b;if(_0xd3808d['length']==0x4)return _0xd3808d[_0x39fc2c(0x223)]((_0x6e3212,_0x1bc37f)=>m4rowdot(_0xbb980,_0x1bc37f,_0xd3808d));if(_0xbb980[_0x39fc2c(0x240)]==0x4)return _0xbb980[_0x39fc2c(0x223)]((_0x5cf220,_0x515e95)=>m4rowdot(_0xd3808d,_0x515e95,_0xbb980));let _0x49da31=new _0xbb980[(_0x39fc2c(0x1e1))](0x10);for(let _0x3d97b5=0x0;_0x3d97b5<0x4;_0x3d97b5+=0x1)for(let _0x1101a6=0x0;_0x1101a6<0x4;_0x1101a6+=0x1)_0x49da31[_0x1101a6+_0x3d97b5*0x4]=m4rowdot(_0xbb980,_0x1101a6,m4col(_0xd3808d,_0x3d97b5));return _0x49da31;}),m3row=(_0x5a5d8e,_0x4fb57)=>new _0x5a5d8e[(a0_0x3b3a0b(0x1e1))](0x3)['map']((_0x10551e,_0x5d91e5)=>_0x5a5d8e[_0x4fb57+0x3*_0x5d91e5]),m3rowdot=(_0x2e4927,_0x573e43,_0x3664d3)=>_0x2e4927[_0x573e43]*_0x3664d3[0x0]+_0x2e4927[_0x573e43+0x3]*_0x3664d3[0x1]+_0x2e4927[_0x573e43+0x6]*_0x3664d3[0x2],m3col=(_0x3d3ec8,_0x5204fa)=>_0x3d3ec8['slice'](_0x5204fa*0x3,(_0x5204fa+0x1)*0x3),m3transpose=_0x4568c1=>_0x4568c1[a0_0x3b3a0b(0x223)]((_0x2ba298,_0x17f41e)=>_0x4568c1[((_0x17f41e&0x3)<<0x2)+(_0x17f41e>>0x2)]),m3mul=(..._0x16a6b2)=>_0x16a6b2['reduce']((_0x410896,_0x1bcd0d)=>{const _0x41cc67=a0_0x3b3a0b;if(_0x1bcd0d[_0x41cc67(0x240)]==0x3)return _0x1bcd0d['map']((_0x34b182,_0x3015d6)=>m3rowdot(_0x410896,_0x3015d6,_0x1bcd0d));if(_0x410896['length']==0x3)return _0x410896['map']((_0x18bbd2,_0x3fae9e)=>m3rowdot(_0x1bcd0d,_0x3fae9e,_0x410896));let _0x4c828b=new _0x410896[(_0x41cc67(0x1e1))](0x9);for(let _0x19b642=0x0;_0x19b642<0x3;_0x19b642+=0x1)for(let _0x3629e0=0x0;_0x3629e0<0x3;_0x3629e0+=0x1)_0x4c828b[_0x3629e0+_0x19b642*0x3]=m3rowdot(_0x410896,_0x3629e0,m3col(_0x1bcd0d,_0x19b642));return _0x4c828b;}),m4trans=(_0x1d3b37,_0x5cb703,_0x436bd5)=>new Float32Array([0x1,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x1,0x0,_0x1d3b37,_0x5cb703,_0x436bd5,0x1]),m4rotX=_0x14ef2d=>{const _0x482831=a0_0x3b3a0b;let _0x5e2ead=Math[_0x482831(0x1f5)](_0x14ef2d),_0x1be145=Math['sin'](_0x14ef2d);return new Float32Array([0x1,0x0,0x0,0x0,0x0,_0x5e2ead,_0x1be145,0x0,0x0,-_0x1be145,_0x5e2ead,0x0,0x0,0x0,0x0,0x1]);},m4rotY=_0x40ca5c=>{let _0x51a1ae=Math['cos'](_0x40ca5c),_0x11272a=Math['sin'](_0x40ca5c);return new Float32Array([_0x51a1ae,0x0,-_0x11272a,0x0,0x0,0x1,0x0,0x0,_0x11272a,0x0,_0x51a1ae,0x0,0x0,0x0,0x0,0x1]);},m4rotZ=_0x32ad53=>{const _0x5e5e21=a0_0x3b3a0b;let _0x5e34e3=Math[_0x5e5e21(0x1f5)](_0x32ad53),_0x5212ea=Math[_0x5e5e21(0x21d)](_0x32ad53);return new Float32Array([_0x5e34e3,_0x5212ea,0x0,0x0,-_0x5212ea,_0x5e34e3,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x1]);},m4fixAxes=(_0x5cabd6,_0x4e351c)=>{_0x5cabd6=normalize(_0x5cabd6);let _0x4463eb=normalize(cross(_0x5cabd6,_0x4e351c)),_0xb891e4=cross(_0x4463eb,_0x5cabd6);return new Float32Array([_0x4463eb[0x0],_0xb891e4[0x0],-_0x5cabd6[0x0],0x0,_0x4463eb[0x1],_0xb891e4[0x1],-_0x5cabd6[0x1],0x0,_0x4463eb[0x2],_0xb891e4[0x2],-_0x5cabd6[0x2],0x0,0x0,0x0,0x0,0x1]);},m4scale=(_0x461417,_0x23c8f8,_0x8f2fc0)=>new Float32Array([_0x461417,0x0,0x0,0x0,0x0,_0x23c8f8,0x0,0x0,0x0,0x0,_0x8f2fc0,0x0,0x0,0x0,0x0,0x1]),m4view=(_0x47efa5,_0x4ffac5,_0x279618)=>m4mul(m4fixAxes(sub(_0x4ffac5,_0x47efa5),_0x279618),m4trans(-_0x47efa5[0x0],-_0x47efa5[0x1],-_0x47efa5[0x2])),m4perspNegZ=(_0x5227f6,_0xc663e6,_0x46213b,_0xae0daf,_0x15b186)=>{const _0x206ac1=a0_0x3b3a0b;let _0x398281=0x1/Math[_0x206ac1(0x1e8)](_0x46213b/0x2),_0x14c7b9=_0x398281*_0x15b186/_0xae0daf;return new Float32Array([_0x14c7b9,0x0,0x0,0x0,0x0,_0x398281,0x0,0x0,0x0,0x0,-(_0xc663e6+_0x5227f6)/(_0xc663e6-_0x5227f6),-0x1,0x0,0x0,0x2*_0xc663e6*_0x5227f6/(_0x5227f6-_0xc663e6),0x0]);},m3rotX=_0x18aa7d=>{const _0x5c2c96=a0_0x3b3a0b;let _0x31c8c9=Math['cos'](_0x18aa7d),_0x3308fe=Math[_0x5c2c96(0x21d)](_0x18aa7d);return new Float32Array([0x1,0x0,0x0,0x0,_0x31c8c9,_0x3308fe,0x0,-_0x3308fe,_0x31c8c9]);},m3rotY=_0x448f35=>{let _0x533cf4=Math['cos'](_0x448f35),_0x109c84=Math['sin'](_0x448f35);return new Float32Array([_0x533cf4,0x0,-_0x109c84,0x0,0x1,0x0,_0x109c84,0x0,_0x533cf4]);},m3rotZ=_0xc3571a=>{const _0x1958ef=a0_0x3b3a0b;let _0x8d3777=Math[_0x1958ef(0x1f5)](_0xc3571a),_0x50b91b=Math[_0x1958ef(0x21d)](_0xc3571a);return new Float32Array([_0x8d3777,_0x50b91b,0x0,-_0x50b91b,_0x8d3777,0x0,0x0,0x0,0x1]);},m3fixAxes=(_0x2046d8,_0x58cb81)=>{_0x2046d8=normalize(_0x2046d8);let _0x1dbef9=normalize(cross(_0x2046d8,_0x58cb81)),_0x527d3f=cross(_0x1dbef9,_0x2046d8);return new Float32Array([_0x1dbef9[0x0],_0x527d3f[0x0],-_0x2046d8[0x0],_0x1dbef9[0x1],_0x527d3f[0x1],-_0x2046d8[0x1],_0x1dbef9[0x2],_0x527d3f[0x2],-_0x2046d8[0x2]]);},m3scale=(_0x448c5e,_0x487fb4,_0xcf747a)=>new Float32Array([_0x448c5e,0x0,0x0,0x0,_0x487fb4,0x0,0x0,0x0,_0xcf747a]),m4fromQ=_0x1535d1=>{let _0x251027=dot(_0x1535d1,_0x1535d1),_0x41cac8=_0x251027?0x2/_0x251027:0x0,_0x431d7b=_0x41cac8*_0x1535d1[0x1]*_0x1535d1[0x1],_0x3f2c2b=_0x41cac8*_0x1535d1[0x1]*_0x1535d1[0x2],_0x10d8c1=_0x41cac8*_0x1535d1[0x1]*_0x1535d1[0x3],_0x4ab8b1=_0x41cac8*_0x1535d1[0x1]*_0x1535d1[0x0],_0x4f773c=_0x41cac8*_0x1535d1[0x2]*_0x1535d1[0x2],_0x2cc8fd=_0x41cac8*_0x1535d1[0x2]*_0x1535d1[0x3],_0x182cec=_0x41cac8*_0x1535d1[0x2]*_0x1535d1[0x0],_0x29c0db=_0x41cac8*_0x1535d1[0x3]*_0x1535d1[0x3],_0x20ebc8=_0x41cac8*_0x1535d1[0x3]*_0x1535d1[0x0];return new Float32Array([0x1-_0x4f773c-_0x29c0db,_0x3f2c2b+_0x20ebc8,_0x10d8c1-_0x182cec,0x0,_0x3f2c2b-_0x20ebc8,0x1-_0x431d7b-_0x29c0db,_0x2cc8fd+_0x4ab8b1,0x0,_0x10d8c1+_0x182cec,_0x2cc8fd-_0x4ab8b1,0x1-_0x431d7b-_0x4f773c,0x0,0x0,0x0,0x0,0x1]);},m4toQ=_0x3a19a3=>{let _0x362faa=_0x3a19a3[0x0],_0xcb06f4=_0x3a19a3[0x5],_0x5a315d=_0x3a19a3[0xa];if(_0x362faa+_0xcb06f4+_0x5a315d>0x0)return normalize([_0x362faa+_0xcb06f4+_0x5a315d+0x1,_0x3a19a3[0x6]-_0x3a19a3[0x9],_0x3a19a3[0x8]-_0x3a19a3[0x2],_0x3a19a3[0x1]-_0x3a19a3[0x4]]);if(_0x362faa>_0xcb06f4&&_0x362faa>_0x5a315d)return normalize([_0x3a19a3[0x6]-_0x3a19a3[0x9],_0x362faa-_0xcb06f4-_0x5a315d+0x1,_0x3a19a3[0x1]+_0x3a19a3[0x4],_0x3a19a3[0x8]-_0x3a19a3[0x2]]);if(_0xcb06f4>_0x5a315d)return normalize([_0x3a19a3[0x8]-_0x3a19a3[0x2],_0x3a19a3[0x1]+_0x3a19a3[0x4],_0xcb06f4-_0x362faa-_0x5a315d+0x1,_0x3a19a3[0x6]+_0x3a19a3[0x9]]);return normalize([_0x3a19a3[0x1]-_0x3a19a3[0x4],_0x3a19a3[0x2]+_0x3a19a3[0x8],_0x3a19a3[0x6]+_0x3a19a3[0x9],_0x5a315d-_0x362faa-_0xcb06f4+0x1]);},m3fromQ=_0x2a3897=>{let _0x1a741e=dot(_0x2a3897,_0x2a3897),_0x244936=_0x1a741e?0x2/_0x1a741e:0x0,_0x22f0f8=_0x244936*_0x2a3897[0x1]*_0x2a3897[0x1],_0x274804=_0x244936*_0x2a3897[0x1]*_0x2a3897[0x2],_0x46e8b9=_0x244936*_0x2a3897[0x1]*_0x2a3897[0x3],_0x222bf0=_0x244936*_0x2a3897[0x1]*_0x2a3897[0x0],_0x321bca=_0x244936*_0x2a3897[0x2]*_0x2a3897[0x2],_0x33140c=_0x244936*_0x2a3897[0x2]*_0x2a3897[0x3],_0x3b1321=_0x244936*_0x2a3897[0x2]*_0x2a3897[0x0],_0x390618=_0x244936*_0x2a3897[0x3]*_0x2a3897[0x3],_0x1cec28=_0x244936*_0x2a3897[0x3]*_0x2a3897[0x0];return new Float32Array([0x1-_0x321bca-_0x390618,_0x274804+_0x1cec28,_0x46e8b9-_0x3b1321,_0x274804-_0x1cec28,0x1-_0x22f0f8-_0x390618,_0x33140c+_0x222bf0,_0x46e8b9+_0x3b1321,_0x33140c-_0x222bf0,0x1-_0x22f0f8-_0x321bca]);},m3toQ=_0x46d8e2=>{let _0x5b2c62=_0x46d8e2[0x0],_0x54c280=_0x46d8e2[0x4],_0x15bab8=_0x46d8e2[0x8];if(_0x5b2c62+_0x54c280+_0x15bab8>0x0)return normalize([_0x5b2c62+_0x54c280+_0x15bab8+0x1,_0x46d8e2[0x5]-_0x46d8e2[0x7],_0x46d8e2[0x6]-_0x46d8e2[0x2],_0x46d8e2[0x1]-_0x46d8e2[0x3]]);if(_0x5b2c62>_0x54c280&&_0x5b2c62>_0x15bab8)return normalize([_0x46d8e2[0x5]-_0x46d8e2[0x7],_0x5b2c62-_0x54c280-_0x15bab8+0x1,_0x46d8e2[0x1]+_0x46d8e2[0x3],_0x46d8e2[0x6]-_0x46d8e2[0x2]]);if(_0x54c280>_0x15bab8)return normalize([_0x46d8e2[0x6]-_0x46d8e2[0x2],_0x46d8e2[0x1]+_0x46d8e2[0x3],_0x54c280-_0x5b2c62-_0x15bab8+0x1,_0x46d8e2[0x5]+_0x46d8e2[0x7]]);return normalize([_0x46d8e2[0x1]-_0x46d8e2[0x3],_0x46d8e2[0x2]+_0x46d8e2[0x6],_0x46d8e2[0x5]+_0x46d8e2[0x7],_0x15bab8-_0x5b2c62-_0x54c280+0x1]);},lerp=(_0x17337b,_0x7b185e,_0x44a7aa)=>add(mul(_0x7b185e,0x1-_0x17337b),mul(_0x44a7aa,_0x17337b)),lbez=(_0x3c30d7,..._0x8303d5)=>{const _0x14f52c=a0_0x3b3a0b;while(_0x8303d5[_0x14f52c(0x240)]>0x1)_0x8303d5=_0x8303d5[_0x14f52c(0x242)](0x1)[_0x14f52c(0x223)]((_0x29cbdf,_0x40a99b)=>lerp(_0x3c30d7,_0x8303d5[_0x40a99b],_0x29cbdf));return _0x8303d5[0x0];},bezcut=(_0x3b6b56,..._0x4d506b)=>{const _0x3eef44=a0_0x3b3a0b;let _0x432c21=[],_0x3f6945=[];while(_0x4d506b['length']>0x0){_0x432c21[_0x3eef44(0x218)](_0x4d506b[0x0]),_0x3f6945[_0x3eef44(0x1f3)](_0x4d506b[_0x4d506b[_0x3eef44(0x240)]-0x1]),_0x4d506b=_0x4d506b[_0x3eef44(0x242)](0x1)[_0x3eef44(0x223)]((_0x4fec55,_0x15d2b9)=>lerp(_0x3b6b56,_0x4d506b[_0x15d2b9],_0x4fec55));}return[_0x432c21,_0x3f6945];},slerp=(_0x41304b,_0x3b8ad7,_0xcddd24)=>{const _0x5107ef=a0_0x3b3a0b;let _0x22e061=dot(_0x3b8ad7,_0xcddd24);if(_0x22e061>0.9999)return normalize(lerp(_0x41304b,_0x3b8ad7,_0xcddd24));let _0x60f728=Math[_0x5107ef(0x21a)](_0x22e061),_0x58e32d=Math['sin'](_0x60f728);return add(mul(_0x3b8ad7,Math[_0x5107ef(0x21d)]((0x1-_0x41304b)*_0x60f728)/_0x58e32d),mul(_0xcddd24,Math[_0x5107ef(0x21d)](_0x41304b*_0x60f728)/_0x58e32d));},qlerp=(_0x4794ff,_0x434c54,_0x1ba826)=>{const _0x452866=a0_0x3b3a0b;let _0x5671be=dot(_0x434c54,_0x1ba826);_0x5671be<0x0&&(_0x1ba826=mul(_0x1ba826,-0x1),_0x5671be=-_0x5671be);if(_0x5671be>0.9999)return normalize(lerp(_0x4794ff,_0x434c54,_0x1ba826));let _0xde4966=Math[_0x452866(0x21a)](_0x5671be),_0x4f0883=Math['sin'](_0xde4966);return add(mul(_0x434c54,Math[_0x452866(0x21d)]((0x1-_0x4794ff)*_0xde4966)/_0x4f0883),mul(_0x1ba826,Math[_0x452866(0x21d)](_0x4794ff*_0xde4966)/_0x4f0883));},sbez=(_0x430e40,..._0x21f80f)=>{const _0x5644d0=a0_0x3b3a0b;while(_0x21f80f[_0x5644d0(0x240)]>0x1)_0x21f80f=_0x21f80f['slice'](0x1)[_0x5644d0(0x223)]((_0x1478a4,_0x2b1eb0)=>slerp(_0x430e40,_0x21f80f[_0x2b1eb0],_0x1478a4));return _0x21f80f[0x0];},qbez=(_0x3658fe,..._0x43b9fb)=>{const _0x5ccb31=a0_0x3b3a0b;while(_0x43b9fb[_0x5ccb31(0x240)]>0x1)_0x43b9fb=_0x43b9fb[_0x5ccb31(0x242)](0x1)[_0x5ccb31(0x223)]((_0x146115,_0x3d99a2)=>qlerp(_0x3658fe,_0x43b9fb[_0x3d99a2],_0x146115));return _0x43b9fb[0x0];};
