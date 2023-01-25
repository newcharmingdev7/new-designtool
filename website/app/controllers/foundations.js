import Controller from '@ember/controller';

export default class FoundationsController extends Controller {
  get cards() {
    // we want to use a flat tree here...
    const tocTree = this.model.toc.flat;
    const sections = ['foundations', 'icons'];
    const cards = {};
    sections.forEach((section) => {
      cards[section] = tocTree
        .filter(
          (page) =>
            page.pageParents[0] === section &&
            !page.pageAttributes?.navigation?.hidden
        )
        .map((page) => {
          return {
            image: page.pageAttributes.previewImage,
            title:
              page.pageAttributes?.navigation?.label ||
              page.pageAttributes.title,
            caption: page.pageAttributes.caption,
            route: 'show',
            model: page.pageURL,
          };
        });
    });
    return cards;
  }
}
