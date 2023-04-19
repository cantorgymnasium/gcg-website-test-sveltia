import { PageHeader } from "./components/index.js";

const ChronikPreview = ({ widgetFor, widgetsFor, entry, document, window }) => {
	/*return [PageHeader,
            h('section', {className: "section-sm"},
                h('div', {className: "container"},
                    h('div', {className: "row"},
                    h('div', {className: "col-12 mb-4 content"},
                    widgetsFor('topics').map(function(i, index) {
                        return h('div', {"id": i.data.id, className: "modal"},
                            h('div', {className: "modal-dialog modal-lg", "role": "document"},
                            h('div', {className: "modal-content"},
                                h('div', {className: "modal-header"},
                                h('h5', {className: "modal-title"}, i.data.title),
                                h('button', {className: "close", type: "button", "dataDismiss": "modal", "ariaLabel": "Close"},
                                    h('span', {"ariaHidden": "true"}, '\u{00d7}')
                                )
                                ),
                                h('div', {className: "modal-body"},
                                h('div', {className: "content"}, i.content)
                                )
                            )
                            )
                        );
                    }),
                    entry.data.pretext != "" && entry.data.pretext != null ? h('div', {"id": "pretext", className: "modal"},
                    h('div', {className: "modal-dialog modal-lg", "role": "document"},
                        h('div', {className: "modal-content"},
                        h('div', {className: "modal-header"},
                            h('h5', {className: "modal-title"}, entry.data.title),
                            h('button', {className: "close", type: "button", "dataDismiss": "modal", "ariaLabel": "Close"},
                            h('span', {"ariaHidden": "true"}, '\u{00d7}')
                            )
                        ),
                        h('div', {className: "modal-body"},
                            h('div', {className: "content"}, widgetFor('pretext'))
                        )
                        )
                    )
                    ) : null,
                    h('div', {"id": "wc-canvas"}),
                    () => {
                        var topics = [[entry.data.title, 100, "pretext"]];
                        widgetsFor('topics').map(function(i, index) {
                        topics.push([i.data.title, 40, i.data.id]);
                        });
                        var script = document.createElement('script');
                        var div = document.getElementById('sc-root');
                        div.appendChild(script);
                        WordCloud(
                        document.getElementById('wc-canvas'),
                        {
                            click: function (item) {
                            if (item[1] != 100 || (item[1] == 100 && item[2] == "pretext")) {
                                $('#' + item[2]).modal('show');
                            }
                            },
                            color: function (word, weight) {
                            return (weight === 100) ? '#ffbc3b' : '#1a1a37';
                            },
                            fontFamily: 'Fira Sans, serif',
                            fontWeight: 800,
                            list: topics,
                            shrinkToFit: true,
                            gridSize: 25,
                            rotateRatio: 0,
                        } 
                        );
                    },
                    widgetFor('body')
                    )
                    )
                )
            )
    ];*/
};

export default ChronikPreview;
