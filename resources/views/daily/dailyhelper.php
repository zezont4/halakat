<?php
/**
 * get each memorization block with it's class and points
 * @param $student            object
 * @param $memorize_type      object
 * @param $countMemorizeTypes integer
 */
function getMemorizeBlocks($student, $memorize_type, $countMemorizeTypes)
{
    $st_points = 0;
    $class = 'default text-muted';

    if (count($student->daily)) {
        foreach ($student->daily[0]->memorize as $st_memorize) {
            if ($memorize_type->id == $st_memorize->memorize_type_id) {
                $class = $st_memorize->PointClassAttrib;
                $st_points = $st_memorize->points;
            }
        }
    }
    ?>
    <div class="col-xs-<?php echo 12 / $countMemorizeTypes;?> col-sm-<?php echo 12 / $countMemorizeTypes;?>">
        <div class="padding_l_r_mini">
            <button type="button" class="btn btn1 btn1-<?php echo $class;?> btn-block" data-toggle="modal" data-target="#memorize_model">
                <?php echo $memorize_type->name;?>
                <?php
                if ($st_points > 0) { ?>
                    <span>&nbsp;&nbsp;<?php echo $st_points; ?></span>
                <?php } ?>
            </button>
        </div>
    </div>
<?php
}

/**
 * get good and bad behaviors
 *
 * @param $student object
 */
function getBehaviorsBlocks($student)
{
    $behaviors = [
        1 => ['success ', 0, 'fa fa-arrow-up ', 'إيجابيات', 'right '],
        2 => ['danger ', 0, 'fa fa-arrow-down ', 'سلبيات', 'left ']
    ];

    if (count($student->daily)) {
        foreach ($student->daily[0]->behavior as $behavior) {
            $behaviors[$behavior->BehaviorTypeAttrib][1] += $behavior->points;
        }
    }
    ?>

    <div class="col-xs-12">
        <div class="padding_l_r_mini">
            <button class="btn no-padding btn-default btn-block">
                <?php
                foreach ($behaviors as $key => $behavior) { ?>
                    <?php if ($key == 2) {
                        echo '&nbsp';
                    } ?>
                    <span class="<?php echo $behavior[2] . ' flag flag-' . $behavior[4];
                    echo $behavior[1] > 0 ? ' flag-' . $behavior[0] : ' flag-default'; ?>"></span>
                    <span class="badge1 badge1-<?php echo $behavior[4]; echo $behavior[1] > 0 ? ' text-' . $behavior[0] : ' text-muted' ?>">
                    <span class="visible-xs-inline "><?php echo $behavior[3]; echo $behavior[1]>0 ? ' : ' : '' ?>  </span>
                        <?php
                        if ($behavior[1] > 0) { ?>
                            <?php echo $behavior[1]; ?>
                        <?php } ?>
                    </span>
                <?php }?>
            </button>
        </div>
    </div>
<?php

}