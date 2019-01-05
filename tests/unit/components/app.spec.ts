import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it('renders button with the text \'What’s for lunch\' initially', () => {
    const msg = 'What’s for lunch';
    const wrapper = shallowMount(App);
    expect(wrapper.find('button#show-recipes-btn').text()).toMatch(msg);
  });
});