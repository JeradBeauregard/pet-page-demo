// template for base crud

function baseService(Model) {
  return {
    findAll: () => Model.find(),
    findById: (id) => Model.findById(id),
    create: (data) => Model.create(data),
    update: (id, data) => Model.findByIdAndUpdate(id, data, { new: true }),
    remove: (id) => Model.findByIdAndDelete(id)
  };
}

module.exports = baseService;
