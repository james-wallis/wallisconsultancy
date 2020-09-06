import PropTypes from 'prop-types';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import markdownStyles from './markdown-styles.module.css';
import CustomLink from '../customLink';

export default function PrintMarkdown({ markdown }) {
  const content = unified()
    .use(parse)
    .use(remark2react, {
      remarkReactComponents: {
        a: CustomLink,
      },
    })
    .processSync(markdown).result;

  return (
    <div className={markdownStyles.markdown}>
      {content}
    </div>
  );
}

PrintMarkdown.propTypes = {
  markdown: PropTypes.string.isRequired,
};
