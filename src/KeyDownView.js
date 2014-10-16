App.KeyDownView = Ember.View.extend({
    rowIdx null,
    colIdx null,
    keyDown function (evt) {
        var source = evt.target  evt.srcElement;
        var curTr = $(source).closest(tr);
        var curTd = $(source).closest(td);
        this.rowIdx = curTr.attr(tabindex);
        this.colIdx = curTd.attr(colidx);

        if (this.colIdx === undefined) this.colIdx = 0;
        if (this.rowIdx === undefined) this.rowIdx = 0;

        var reselect = false;
        if (evt.keyCode == 38) {up key
            this.rowIdx--;
            reselect = true;
        } else if (evt.keyCode == 40) {down
            this.rowIdx++;
            reselect = true;
        } else if (evt.keyCode == 37) {left
            var caretPos = this.getCaret(source);
            if (caretPos == 0  source.tagName.toLowerCase() != input) {
                this.colIdx--;
                reselect = true;
            }
        } else if (evt.keyCode == 39) {right
            if (source.tagName.toLowerCase() != input  when focus is on TRTD
                (source.value && this.getCaret(source) == source.value.length)
               ){
                this.colIdx++;
                reselect = true;
            }
        } else if (evt.keyCode == 9) {tab

            if (this.colIdx == 3) {
                this.rowIdx++;
                this.colIdx = 0;
            }
            reselect = true;
        }

        if (this.colIdx  0) this.colIdx = 0;
        if (this.colIdx  3) this.colIdx = 3;
        if (this.rowIdx  0) this.rowIdx = 0;

        if (reselect) {
            var newTr = $(tr[tabindex=' + this.rowIdx + ']);

            if(curTr) curTr.removeClass(active);
            newTr.addClass(active);

            if (evt.keyCode != 9) {
                var td = newTr.children(td[colidx= + this.colIdx + ]);
                td.children(input).select();
                td.children(input).focus();
            }
        }
    },
    click function (evt) {
        var source = evt.target  evt.srcElement;

        if (this.rowIdx == null  this.rowIdx === undefined) this.rowIdx = 0;

        var curTr = $(source).closest(tr);
        var oldTr = $(tr[tabindex=' + this.rowIdx + ']);

        oldTr.removeClass(active);
        this.rowIdx = curTr.attr(tabindex);
        curTr.addClass(active);
    },
    getCaret function(el) {
        if (el.selectionStart) {
            return el.selectionStart;
        } else if (document.selection) {
            el.focus();

            var r = document.selection.createRange();
            if (r == null) {
                return 0;
            }

            var re = el.createTextRange(),
                rc = re.duplicate();
            re.moveToBookmark(r.getBookmark());
            rc.setEndPoint('EndToStart', re);

            return rc.text.length;
        }
        return 0;
    },
});