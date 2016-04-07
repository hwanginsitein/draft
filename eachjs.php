<script src="http://code.jquery.com/jquery-2.2.1.min.js"></script>
<div id="datasdick">
    <div class="onesdickcls" id="onesdick2" style="opacity: 1;">
        <div class="slider-wrapper"><input type="text" class="js-callback ginput2" style="display: none;">
            <span class="range-bar">
                <span class="range-handle" style="left: 0px;"></span>
                <span class="range-min">10</span>
                <span class="range-max">2000</span>
                <span class="range-quantity" style="width: 0px;"></span>
            </span>
            <div id="js-display-callback" class="display-box">
                <input type="text" name="" id="gnum2" class="gnum">
            </div>
            <div class="deldatacls" id="deldata2">
                GB&nbsp;&nbsp;&nbsp;&nbsp;
                <select class="disktype" style="width:100px;height:25px;" onchange="fly_get_total()">
                    <option value="0.36443954549679" selected="">vHDD-SATA</option>
                    <option value="1.26574470954863">vHDD-SAS</option>
                    <option value="4.31935382133471">vHDD-SSD</option>
                </select>
                &nbsp;&nbsp;&nbsp;
                <a href="javascript:void(0)" onclick="deloneslide(2)">删除</a>
            </div>
        </div>
    </div>
</div>
<script>
    var b = 0;
    $("#datasdick .onesdickcls").each(function() {
        alert(parseInt($(this).find(".gnum").val()));
        alert(parseFloat($(this).find(".disktype").val()));
        b += parseInt($(this).find(".gnum").val()) * parseFloat($(this).find(".disktype").val());
    });
    //alert(b);
</script>