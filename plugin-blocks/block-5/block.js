(function (blocks, element, blockEditor) {
    var el = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType('plugin-blocks/block-5', {
        attributes: {
            headline: {
                type: 'string',
                source: 'html',
                selector: 'h2.contact-headline',
            },
            desc: {
                type: 'string',
                source: 'html',
                selector: 'p.contact-desc',
            },
        },
        edit: function (props) {
            var { headline, desc } = props.attributes;

            function onChangeHeadline(newHeadline) {
                props.setAttributes({ headline: newHeadline });
            }
            function onChangeDesc(newDesc) {
                props.setAttributes({ desc: newDesc });
            }
        
            return el(
                'div',
                useBlockProps(),
                el('input', {
                    type: 'text',
                    className: 'contact-headline',
                    value: headline,
                    onChange: (e) => onChangeHeadline(e.target.value),
                    placeholder: 'Wpisz nagłówek',
                }),
                el('input', {
                    type: 'text',
                    className: 'contact-desc',
                    value: desc,
                    onChange: (e) => onChangeDesc(e.target.value),
                    placeholder: 'Wpisz opis',
                }),
                el(
                    blockEditor.InnerBlocks,
                    null
                )
            );
        },        
        save: function (props) {
            return el('div', {},
                el('div', { className: 'virtuality__parallax' }),
                el('div',
                    { className: 'virtuality__content' },
                    el('div',
                        {className: 'virtuality__content-contacthead'},
                        el('div', {},
                            el('h2',
                                { className: 'contact-headline' },
                                props.attributes.headline
                            ),
                            el('p',
                                { className: 'contact-desc' }, 
                                props.attributes.desc
                            )
                        )
                    ),
                    el(
                        blockEditor.InnerBlocks.Content
                    )
                )
            )
        }
    })
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);