( function ( blocks, element, blockEditor ) {
    var el = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType( 'plugin-blocks/block-4', {
        edit: function ( props ) {
            var blockProps = useBlockProps();

            return el(
                'div',
                blockProps,
                el(
                    blockEditor.InnerBlocks,
                    {
                        template: [
                            ['plugin-blocks/block-2'],
                            ['plugin-blocks/block-2'],
                            ['plugin-blocks/block-2']
                        ],
                        templateLock: 'all',
                    }
                )
            );
        },

        save: function ( props ) {
            var blockProps = useBlockProps.save();

            return el( 'div',
                { className: 'offer__container' },
                el(
                    blockEditor.InnerBlocks.Content
                )
            )
        }
    })
})( 
    window.wp.blocks,
	window.wp.element,
	window.wp.blockEditor
);