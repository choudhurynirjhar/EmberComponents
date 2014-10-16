App.TypeAheadComponent = Em.Component.extend({
    tagName: 'input',
    attributeBindings: ['type', 'placeholder'],
    classNames: ['typeahead', 'form-control'],
    type: 'text',
    items: [],
    selectedValue: null,
    matchProperty: null,
    selectedItem: null,

    onSelectedValue: function () {
        this.typeahead('val', this.get('selectedValue'));
    }.observes('selectedValue'),

    lookupItems: function() {
        var matchProperty = this.get('matchProperty');
        var items = this.get('items');
        if (!matchProperty || !items) return Em.A([]);
        var lookupItems = Em.A([]);
        for (var count = 0; count < items.length; count++) {
            var item = items[count];
            lookupItems.pushObject({
                matchProperty: item[matchProperty].toLowerCase(),
                originalProperty: item[matchProperty],
                item: item
            });
        }
        return lookupItems;
    }.property('items', 'matchProperty'),

    didInsertElement: function () {
        var me = this;
        var typeaheadSettings = {
            hint: true,
            highlight: true
        };

        var typeaheadData = {
            displayKey: 'originalProperty',
            templates: {
                empty: '<div class="tt-empty-message">No matches found</div>'
            },
            source: function(query, showItems) {
                query = query.toLowerCase();
                var matches = me.get('lookupItems').filter(function (value) {
                    return value.matchProperty.indexOf(query) >= 0;
                });
                showItems(matches);
            }
        };

        this.plugin = this.$().typeahead(typeaheadSettings, typeaheadData);

        if (!Modernizr.input.placeholder) return this.plugin.placeholder();

        this.typeahead = this.plugin.typeahead.bind(this.plugin);

        this.plugin.on('typeahead:selected', function(e, selection) {
            me.set('selectedValue', selection.originalProperty);
            me.set('selectedItem', selection.item);
        });

        this.plugin.on('typeahead:closed', function() {
            var query = me.typeahead('val');
            me.set('selectedValue', query);
        });

        this.plugin.on('keyup', function() {
            if (!me.typeahead('val')) {
                me.set('selectedValue', null);
            }
        });
    },

    willDestroyElement: function() {
        this.plugin.off('typeahead:selected');
        this.plugin.off('typeahead:closed');
        this.plugin.off('keyup');
        if (this.typeahead)
            this.typeahead('destroy');
    }
});
