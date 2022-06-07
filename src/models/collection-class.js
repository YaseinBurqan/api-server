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

  async readRecord(id) {
    try {
      if (id) {
        return await this.model.findOne({ where: { id: id } });
      } else {
        return await this.model.findAll();
      }
    } catch (e) {
      console.error("error in reading record(s) for model: ", this.model.name);
    }
  }
  async updateRecord(id, obj) {
    try {
      let recordToUpdate = await this.model.findOne({ where: { id: id } });
      return await recordToUpdate.update(obj);
    } catch (e) {
      console.error("error in updating record for model: ", this.model.name);
    }
  }

  async deleteRecord(id) {
    try {
      return await this.model.destroy({ where: { id } });
    } catch (e) {
      console.error("error in deleting record for model: ", this.model.name);
    }
  }
}

module.exports = Collection;
