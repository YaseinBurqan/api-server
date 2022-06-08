"use strict";

// CRUD operations
class Collection {
  constructor(model) {
    this.model = model;
  }

  async createRecord(obj) {
    try {
      return await this.model.create(obj);
    } catch (e) {
      console.error("error in creating a new record for model: ", this.model.name);
    }
  }

  async readRecord(dataId) {
    try {
      if (dataId) {
        return await this.model.findOne({ where: { id: dataId } });
      } else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error("error in reading record for model: ", this.model.name);
    }
  }
  async updateRecord(obj) {
    try {
      let updated = await record.update(obj);
      return updated;
    } catch (e) {
      console.error("error in updating record in model ", this.model);
    }
  }

  async deleteRecord(id) {
    if (!id) {
      throw new Error("no id provided for model ", this.model);
    }
    try {
      let deleted = await this.model.destroy({ where: { id } });
      return deleted;
    } catch (e) {
      console.error("error in deleting record for model: ", this.model.name);
    }
  }
}

module.exports = Collection;
