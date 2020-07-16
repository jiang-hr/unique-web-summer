# Event Loop 事件循环机制

JavaScript是单线程，若同步（synchronous）阻塞的话，很多东西耗时很久，性能低下。

同步多线程的话，js 会出人命的，所以js设计成单线程。

而单线程阻塞了话，cpu啥事都不干，浪费时间，所以需要异步（asynchronous）挂起处于等待的任务，进行下一项。



#### 执行栈与事件队列

js引擎遇到一个异步事件后并不会一直等待其返回结果，而是会将这个事件挂起，继续执行执行栈中的其他任务。当一个异步事件返回结果后，js会将这个事件加入与当前执行栈不同的另一个队列，我们称之为事件队列。被放入事件队列不会立刻执行其回调，而是等待当前执行栈中的所有任务都执行完毕，  主线程处于闲置状态时，主线程会去查找事件队列是否有任务。如果有，那么主线程会从中取出排在第一位的事件，并把这个事件对应的回调放入执行栈中，然后执行其中的同步代码...，如此反复，这样就形成了一个无限的循环。这就是这个过程被称为“事件循环（Event Loop）”的原因。



<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="77.974937mm" height="71.723099mm" viewBox="0 0 77.974937 71.723099" version="1.1" id="svg8" inkscape:version="0.92.4 (5da689c313, 2019-01-14)" sodipodi:docname="event-loop.svg">
  <defs id="defs2"/>
  <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="1.979899" inkscape:cx="51.899901" inkscape:cy="210.31454" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" inkscape:window-width="1920" inkscape:window-height="1017" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1"/>
  <metadata id="metadata5">
    <rdf:RDF>
      <cc:Work rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
        <dc:title/>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-56.532765,-176.99326)">
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3115" class="com.sun.star.drawing.CustomShape">
      <g id="g3117">
        <path style="fill:#cfe7f5;stroke:none" inkscape:connector-curvature="0" id="path3119" d="M 5550,11500 H 1200 V 3500 h 8700 v 8000 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3121" d="M 5550,11500 H 1200 V 3500 h 8700 v 8000 H 5550"/>
        <rect style="fill:none;stroke:none" id="rect3123" height="8001" width="8701" y="3500" x="1200"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3125" class="com.sun.star.drawing.CustomShape">
      <g id="g3127">
        <path style="fill:#00ffff;stroke:none" inkscape:connector-curvature="0" id="path3129" d="M 5550,11500 H 1200 V 9700 h 8700 v 1800 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3131" d="M 5550,11500 H 1200 V 9700 h 8700 v 1800 H 5550"/>
        <rect style="fill:none;stroke:none" id="rect3133" height="1801" width="8701" y="9700" x="1200"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3135" class="com.sun.star.drawing.CustomShape">
      <g id="g3137">
        <path style="fill:#0099ff;stroke:none" inkscape:connector-curvature="0" id="path3139" d="M 2250,9700 H 1200 V 3500 h 2100 v 6200 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3141" d="M 2250,9700 H 1200 V 3500 H 3300 V 9700 H 2250"/>
        <rect style="fill:none;stroke:none" id="rect3143" height="6201" width="2101" y="3500" x="1200"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3145" class="com.sun.star.drawing.CustomShape">
      <g id="g3147">
        <path style="fill:#cfe7f5;stroke:none" inkscape:connector-curvature="0" id="path3149" d="M 5549,11499 H 1199 V 3499 h 8700 v 8000 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3151" d="M 5549,11499 H 1199 V 3499 h 8700 v 8000 H 5549"/>
        <rect style="fill:none;stroke:none" id="rect3153" height="8001" width="8701" y="3499" x="1199"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="g3155" class="com.sun.star.drawing.CustomShape">
      <g id="g3157" style="stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
        <path style="fill:#00ffff;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" inkscape:connector-curvature="0" id="path3159" d="M 5549,11499 H 1199 v -1100 h 8700 v 1100 z"/>
        <path style="fill:none;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" inkscape:connector-curvature="0" id="path3161" d="M 5549,11499 H 1199 v -1100 h 8700 v 1100 H 5549"/>
        <rect style="fill:none;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect3163" height="1101" width="8701" y="10399" x="1199"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="g3165" class="com.sun.star.drawing.CustomShape">
      <g id="g3167" style="stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1">
        <path style="fill:#0099ff;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" inkscape:connector-curvature="0" id="path3169" d="M 1999,10399 H 1199 V 3499 h 1600 v 6900 z"/>
        <path style="fill:none;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" inkscape:connector-curvature="0" id="path3171" d="M 1999,10399 H 1199 V 3499 h 1600 v 6900 h -800"/>
        <rect style="fill:none;stroke:#000000;stroke-width:29.62461853;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" id="rect3173" height="6901" width="1601" y="3499" x="1199"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13989)" style="visibility:visible" id="g3175" class="com.sun.star.drawing.CustomShape">
      <g id="g3177">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3179" d="m 7500,7000 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3181" d="m 7500,7000 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3183" height="601" width="601" y="6400" x="7200"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13989)" style="visibility:visible" id="g3185" class="com.sun.star.drawing.CustomShape">
      <g id="g3187">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3189" d="m 6499,6299 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3191" d="m 6499,6299 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3193" height="601" width="601" y="5699" x="6199"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13988)" style="visibility:visible" id="g3195" class="com.sun.star.drawing.CustomShape">
      <g id="g3197">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3199" d="m 7099,4799 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3201" d="m 7099,4799 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3203" height="601" width="601" y="4199" x="6799"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13988)" style="visibility:visible" id="g3205" class="com.sun.star.drawing.CustomShape">
      <g id="g3207">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3209" d="m 5099,5199 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3211" d="m 5099,5199 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3213" height="601" width="601" y="4599" x="4799"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13989)" style="visibility:visible" id="g3215" class="com.sun.star.drawing.CustomShape">
      <g id="g3217">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3219" d="m 8699,6499 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3221" d="m 8699,6499 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3223" height="601" width="601" y="5899" x="8399"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13988)" style="visibility:visible" id="g3225" class="com.sun.star.drawing.CustomShape">
      <g id="g3227">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3229" d="m 7899,8299 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3231" d="m 7899,8299 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3233" height="601" width="601" y="7699" x="7599"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.956563,146.13988)" style="visibility:visible" id="g3235" class="com.sun.star.drawing.CustomShape">
      <g id="g3237">
        <path style="fill:#7e0021;stroke:none" inkscape:connector-curvature="0" id="path3239" d="m 5399,8099 h -300 v -600 h 600 v 600 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3241" d="m 5399,8099 h -300 v -600 h 600 v 600 h -300"/>
        <rect style="fill:none;stroke:none" id="rect3243" height="601" width="601" y="7499" x="5099"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3245" class="com.sun.star.drawing.CustomShape">
      <g id="g3247">
        <path style="fill:#ff950e;stroke:none" inkscape:connector-curvature="0" id="path3249" d="m 1999,10299 h -700 v -800 h 1400 v 800 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3251" d="m 1999,10299 h -700 v -800 h 1400 v 800 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3253" height="801" width="1401" y="9499" x="1299"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3255" class="com.sun.star.drawing.CustomShape">
      <g id="g3257">
        <path style="fill:#ff950e;stroke:none" inkscape:connector-curvature="0" id="path3259" d="m 1999,9399 h -700 v -800 h 1400 v 800 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3261" d="m 1999,9399 h -700 v -800 h 1400 v 800 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3263" height="801" width="1401" y="8599" x="1299"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3265" class="com.sun.star.drawing.CustomShape">
      <g id="g3267">
        <path style="fill:#ff950e;stroke:none" inkscape:connector-curvature="0" id="path3269" d="m 1999,8499 h -700 v -800 h 1400 v 800 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3271" d="m 1999,8499 h -700 v -800 h 1400 v 800 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3273" height="801" width="1401" y="7699" x="1299"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3285" class="com.sun.star.drawing.CustomShape">
      <g id="g3287">
        <path style="fill:#cccc00;stroke:none" inkscape:connector-curvature="0" id="path3289" d="m 1999,11399 h -700 v -900 h 1400 v 900 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3291" d="m 1999,11399 h -700 v -900 h 1400 v 900 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3293" height="901" width="1401" y="10499" x="1299"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3295" class="com.sun.star.drawing.CustomShape">
      <g id="g3297">
        <path style="fill:#cccc00;stroke:none" inkscape:connector-curvature="0" id="path3299" d="m 3599,11399 h -700 v -900 h 1400 v 900 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3301" d="m 3599,11399 h -700 v -900 h 1400 v 900 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3303" height="901" width="1401" y="10499" x="2899"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.95655,145.87529)" style="visibility:visible" id="g3305" class="com.sun.star.drawing.CustomShape">
      <g id="g3307">
        <path style="fill:#cccc00;stroke:none" inkscape:connector-curvature="0" id="path3309" d="m 5199,11399 h -700 v -900 h 1400 v 900 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3311" d="m 5199,11399 h -700 v -900 h 1400 v 900 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3313" height="901" width="1401" y="10499" x="4499"/>
      </g>
    </g>
    <g transform="matrix(0.0089312,0,0,0.0089312,45.938807,138.03454)" style="visibility:visible" id="g3265-2" class="com.sun.star.drawing.CustomShape">
      <g id="g3267-3">
        <path style="fill:#ff950e;stroke:none" inkscape:connector-curvature="0" id="path3269-8" d="m 1999,8499 h -700 v -800 h 1400 v 800 z"/>
        <path style="fill:none;stroke:#808080" inkscape:connector-curvature="0" id="path3271-6" d="m 1999,8499 h -700 v -800 h 1400 v 800 h -700"/>
        <rect style="fill:none;stroke:none" id="rect3273-9" height="801" width="1401" y="7699" x="1299"/>
      </g>
    </g>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="57.177685" y="182.05789" id="text3427"><tspan sodipodi:role="line" id="tspan3429" x="57.177685" y="182.05789" style="font-size:5.29166651px;line-height:1.38999999;stroke-width:0.26458332">Stack</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="120.16713" y="182.09975" id="text3427-8"><tspan sodipodi:role="line" id="tspan3429-2" x="120.16713" y="182.09975" style="font-size:5.29166651px;line-height:1.38999999;stroke-width:0.26458332">Heap</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="117.41768" y="244.80936" id="text3427-8-7"><tspan sodipodi:role="line" id="tspan3429-2-3" x="117.41768" y="244.80936" style="font-size:5.29166651px;line-height:1.38999999;stroke-width:0.26458332">Queue</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="58.621696" y="211.61252" id="text3427-89"><tspan sodipodi:role="line" id="tspan3429-7" x="58.621696" y="211.61252" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Frame</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="58.639442" y="219.45326" id="text3427-89-2"><tspan sodipodi:role="line" id="tspan3429-7-7" x="58.639442" y="219.45326" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Frame</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="58.639442" y="227.49135" id="text3427-89-1"><tspan sodipodi:role="line" id="tspan3429-7-9" x="58.639442" y="227.49135" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Frame</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="58.639442" y="235.52943" id="text3427-89-3"><tspan sodipodi:role="line" id="tspan3429-7-95" x="58.639442" y="235.52943" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Frame</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="58.036892" y="244.37837" id="text3427-89-17"><tspan sodipodi:role="line" id="tspan3429-7-2" x="58.036892" y="244.37837" style="font-size:2.82222223px;line-height:1.38999999;stroke-width:0.26458332">Message</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="72.326813" y="244.37837" id="text3427-89-17-8"><tspan sodipodi:role="line" id="tspan3429-7-2-7" x="72.326813" y="244.37837" style="font-size:2.82222223px;line-height:1.38999999;stroke-width:0.26458332">Message</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="86.616737" y="244.37837" id="text3427-89-17-85"><tspan sodipodi:role="line" id="tspan3429-7-2-3" x="86.616737" y="244.37837" style="font-size:2.82222223px;line-height:1.38999999;stroke-width:0.26458332">Message</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="86.327034" y="185.9384" id="text3427-8-4"><tspan sodipodi:role="line" id="tspan3429-2-6" x="86.327034" y="185.9384" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="104.18944" y="182.36592" id="text3427-8-4-6"><tspan sodipodi:role="line" id="tspan3429-2-6-4" x="104.18944" y="182.36592" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="98.830719" y="195.76271" id="text3427-8-4-3"><tspan sodipodi:role="line" id="tspan3429-2-6-5" x="98.830719" y="195.76271" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="118.47935" y="197.54895" id="text3427-8-4-1"><tspan sodipodi:role="line" id="tspan3429-2-6-41" x="118.47935" y="197.54895" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="107.77086" y="202.02348" id="text3427-8-4-0"><tspan sodipodi:role="line" id="tspan3429-2-6-8" x="107.77086" y="202.02348" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="111.3344" y="213.62512" id="text3427-8-4-9"><tspan sodipodi:role="line" id="tspan3429-2-6-1" x="111.3344" y="213.62512" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
    <text xml:space="preserve" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.17499995px;line-height:0%;font-family:Arial;-inkscape-font-specification:Arial;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="89.006401" y="211.83888" id="text3427-8-4-9-7"><tspan sodipodi:role="line" id="tspan3429-2-6-1-8" x="89.006401" y="211.83888" style="font-size:3.52777767px;line-height:1.38999999;stroke-width:0.26458332">Object</tspan></text>
  </g>
</svg>

```javascript
function foo(b) {
  let a = 10;
  return a + b + 11;
}

function bar(x) {
  let y = 3;
  return foo(x * y);
}

console.log(bar(7)); // 返回 42
```



### 堆

对象被分配在堆中，堆是一个用来表示一大块（通常是非结构化的）内存区域的计算机术语。

### 队列

一个 JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。

------



下面的例子演示了这个概念（`setTimeout` 并不会在计时器到期之后直接执行）：

```js
const s = new Date().getSeconds();

setTimeout(function() {
  // 输出 "2"，表示回调函数并没有在 500 毫秒之后立即执行
  console.log("Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);

while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("Good, looped for 2 seconds");
    break;
  }
}


```

### 零延迟

零延迟并不意味着回调会立即执行。以 0 为第二参数调用 `setTimeout` 并不表示在 0 毫秒后就立即调用回调函数。



基本上，`setTimeout` 需要等待当前队列中所有的消息都处理完毕之后才能执行，即使已经超出了由第二参数所指定的时间。

```js
(function() {

  console.log('这是开始');

  setTimeout(function cb() {
    console.log('这是来自第一个回调的消息');
  });

  console.log('这是一条消息');

  setTimeout(function cb1() {
    console.log('这是来自第二个回调的消息');
  }, 0);

  console.log('这是结束');

})();

// "这是开始"
// "这是一条消息"
// "这是结束"
// "这是来自第一个回调的消息"
// "这是来自第二个回调的消息"
```

### 多个运行时互相通信

一个 web worker 或者一个跨域的 `iframe` 都有自己的栈、堆和消息队列。两个不同的运行时只能通过 [`postMessage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage) 方法进行通信。如果另一个运行时侦听 `message` 事件，则此方法会向该运行时添加消息。







