(function (blocks, element, blockEditor, components, serverSideRender) {
    var el = element.createElement;
    var useBlockProps = blockEditor.useBlockProps;
    var MediaUpload = blockEditor.MediaUpload;

    blocks.registerBlockType('plugin-blocks/block-1', {
        attributes: {
            mediaID: {
                type: 'number',
            },
            mediaSRC: {
                type: 'string',
                source: 'attribute',
                selector: 'img.pros-image',
                attribute: 'src',
            },
            alt: {
                type: 'string',
                source: 'attribute',
                selector: 'img.pros-image',
                attribute: 'alt',
            },
            title: {
                type: 'string',
                source: 'html',
                selector: 'h2.pros-title',
            },
            desc: {
                type: 'string',
                source: 'html',
                selector: 'p.pros-desc',
            },
        },
        edit: function (props) {
            var { mediaID, mediaSRC, title, desc, alt } = props.attributes;

            var onSelectImage = function (media) {
                if (mediaID) {
                    props.setAttributes({
                        mediaSRC: media.url,
                        mediaID: media.id,
                        alt: media.alt,
                    });
                } else {
                    props.setAttributes({
                        mediaSRC: media.url,
                        mediaID: media.id,
                        alt: media.alt,
                    });
                }

                props.setAttributes({
                    someUniqueAttribute: Date.now(),
                });
            };

            var imageElement = null;
            if (mediaSRC) {
                imageElement = el('img', {
                    src: mediaSRC,
                    alt: alt,
                });
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
                el(
                    'div',
                    { className: 'pros' },
                    imageElement,
                    el(MediaUpload, {
                        onSelect: (media) => onSelectImage(media),
                        allowedTypes: ['image'],
                        value: mediaID,
                        render: function (obj) {
                            return el(
                                components.Button,
                                {
                                    className: mediaID ? 'image-button' : 'button button-large',
                                    onClick: obj.open,
                                },
                                mediaID ? 'Zmień grafikę' : 'Dodaj grafikę'
                            );
                        },
                    })
                ),
                el('input', {
                    type: 'text',
                    className: 'pros-title',
                    value: title,
                    onChange: (e) => onChangeTitle(e.target.value),
                    placeholder: 'Wpisz nagłówek',
                }),
                el('input', {
                    type: 'text',
                    className: 'pros-desc',
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
                        { className: 'virtuality__content-pros' },
                        el('div', {},
                            el('h2',
                                { className: 'pros-title' },
                                props.attributes.title
                            ),
                            el('p', { className: 'pros-desc' }, 
                                props.attributes.desc
                            )
                        ),
                        el('div', { className: 'pros' },
                            el('img', {
                                src: props.attributes.mediaSRC,
                                alt: props.attributes.alt,
                                loading: 'lazy',
                                className: 'pros-image',
                            })
                        )
                    )
                )
            )
        }
    })
})(window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components, window.wp.serverSideRender);