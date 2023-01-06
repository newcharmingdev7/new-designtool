import Controller from '@ember/controller';

export default class FoundationsController extends Controller {
  get cards() {
    // we want to use a flat tree here...
    const tocTree = this.model.toc.flat;
    const sections = ['foundations', 'icons'];
    const cards = {};
    sections.forEach((section) => {
      cards[section] = tocTree
        .filter((page) => page.pageParents[0] === section)
        .map((page) => {
          return {
            image: page.pageAttributes.previewImage,
            title: page.pageAttributes.title,
            caption:
              page.pageAttributes.caption ||
              'Don\'t forget to add the "caption" to the frontmatter for this page',
            route: 'show',
            model: page.pageURL,
          };
        });
    });
    return cards;
  }
}
