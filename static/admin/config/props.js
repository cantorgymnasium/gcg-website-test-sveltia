const MarkdownProps = {
    toolbar_buttons: {
        main: [
            'bold',
            'italic',
            'strikethrough',
            'code',
            'font',
            'unordered-list',
            'ordered-list',
            'decrease-indent',
            'increase-indent',
            'insert-table',
            'blockquote',
            'file-link',
            'code-block',
            'shortcode',
          ],
          empty: [],
          selection: ['bold', 'italic', 'strikethrough', 'code', 'font', 'file-link', 'blockquote'],
          table_empty: [
            'bold',
            'italic',
            'strikethrough',
            'code',
            'insert-row',
            'delete-row',
            'insert-column',
            'delete-column',
            'delete-table',
            'file-link',
            'shortcode',
          ],
          table_selection: [
            'bold',
            'italic',
            'strikethrough',
            'code',
            'insert-row',
            'delete-row',
            'insert-column',
            'delete-column',
            'delete-table',
            'file-link',
            'shortcode',
          ]
    }
};

const DateFormat = {
    date_format: "dd.MM.yyyy",
    time_format: false,
    format: "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
};

export { MarkdownProps, DateFormat };