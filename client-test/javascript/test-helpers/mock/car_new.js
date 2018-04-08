export const makersResponse = {
  data: {
    makers: [
      { id: 1, name: "トヨタ" },
      { id: 2, name: "日産" },
      { id: 3, name: "ホンダ" },
    ]
  }
}

export const modelsResponse = {
  data: {
    car_models: [
      { id: 1, name: "カローラ" },
      { id: 2, name: "クラウン" },
      { id: 3, name: "８６" },
    ]
  }
}

const mockNewCar = {
  get: jest.fn((url) => {
    let promise;
    switch (true) {
      case /api\/makers/.test(url):
        promise = Promise.resolve(makersResponse);
        break
      case /api\/car_models/.test(url):
        promise = Promise.resolve(modelsResponse);
        break
      default:
        cnsole.log("urlがマッチしませんでした")
        break
    }
    return promise
  }),
};

export default mockNewCar;