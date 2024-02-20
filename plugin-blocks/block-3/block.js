(function (blocks, element, blockEditor) {
    var el = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;

    blocks.registerBlockType('plugin-blocks/block-3', {
        attributes: {
            headline: {
                type: 'string',
                source: 'html',
                selector: 'h2.offer-headline',
            },
            title: {
                type: 'string',
                source: 'html',
                selector: 'h2.about-title',
            },
            desc: {
                type: 'string',
                source: 'html',
                selector: 'p.about-desc',
            },
        },
        edit: function (props) {
            var { headline, title, desc } = props.attributes;

            function onChangeHeadline(newHeadline) {
                props.setAttributes({ headline: newHeadline });
            }
            function onChangeTitle(newTitle) {
                props.setAttributes({ title: newTitle });
            }
            function onChangeDesc(newDesc) {
                props.setAttributes({ desc: newDesc });
            }
        
            return el(
                'div',
                useBlockProps(),
                el('input', {
                    type: 'text',
                    className: 'offer-headline',
                    value: headline,
                    onChange: (e) => onChangeHeadline(e.target.value),
                    placeholder: 'Wpisz nagłówek 1',
                }),
                el(
                    blockEditor.InnerBlocks,
                    null
                ),
                el('input', {
                    type: 'text',
                    className: 'about-title',
                    value: title,
                    onChange: (e) => onChangeTitle(e.target.value),
                    placeholder: 'Wpisz nagłówek 2',
                }),
                el('input', {
                    type: 'text',
                    className: 'about-desc',
                    value: desc,
                    onChange: (e) => onChangeDesc(e.target.value),
                    placeholder: 'Wpisz opis',
                })
            );
        },        
        save: function (props) {
            return el('div', {},
                el('div', { className: 'virtuality__parallax' }),
                el('div',
                    { className: 'virtuality__content' },
                    el('div',
                        {className: 'virtuality__content-offer'},
                        el('h2',
                            { className: 'offer-headline' },
                            props.attributes.headline
                        ),
                        el(
                            blockEditor.InnerBlocks.Content
                        )
                    ),
                    el('div',
                        {className: 'virtuality__content-about'},
                        el('div', {},
                            el('h2',
                                { className: 'about-title' },
                                props.attributes.title
                            ),
                            el('p', { className: 'about-desc' }, 
                                props.attributes.desc
                            )
                        )
                    )
                )
            )
        }
    })
})(window.wp.blocks, window.wp.element, window.wp.blockEditor);