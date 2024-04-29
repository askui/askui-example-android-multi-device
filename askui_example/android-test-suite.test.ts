import { auiAndroidDevice1, auiAndroidDevice2 } from './helpers/askui-helper';

describe('android mobile device', () => {
  it('should generate an (interactive) annotation', async () => {
    await auiAndroidDevice1.annotate();
    await auiAndroidDevice2.annotate();
  });

  it('should click on any text', async () => {
    await auiAndroidDevice1.click().text().exec();
    await auiAndroidDevice2.click().text().exec();
  });

});
