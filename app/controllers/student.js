const Joi = require('joi');

const { student: stripStudent, event: stripEvent } = require('../util/strip');
const service = require('../services/student');
const validator = require('../validators/student');

// [GET] /students
exports.list = {
  handler: async (req) => {
    const { type } = req.auth.credentials;
    const students = await service.list();
    if (type === 'admin') {
      return students;
    }
    return students.map(stripStudent);
  },
  auth: {
    scope: ['admin', 'student'],
  },
};

// [GET] /students/{id}
exports.get = {
  handler: async (req) => {
    const { id } = req.params;
    return service.get(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [POST] /students
exports.create = {
  handler: async (req) => {
    const { payload } = req;
    return service.create(payload);
  },
  validate: {
    payload: validator.requiredPayload,
  },
  auth: {
    scope: ['admin'],
  },
};

// [PUT] /students/{id}
exports.update = {
  handler: async (req) => {
    const { id } = req.params;
    const { payload } = req;
    return service.update(id, payload);
  },
  validate: {
    payload: validator.payload,
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [DELETE] /students/{id}
exports.delete = {
  handler: async (req) => {
    const { id } = req.params;
    return service.delete(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin'],
  },
};

// [GET] /students/{id}/tickets
exports.tickets = {
  handler: async (req) => {
    const { id } = req.params;
    return service.tickets(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [GET] /students/{id}/events
exports.events = {
  handler: async (req) => {
    const { type } = req.auth.credentials;
    const { id } = req.params;
    const events = await service.events(id);

    if (type === 'admin') {
      return events;
    }
    return events.map(stripEvent);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [GET] /students/{id}/teams
exports.teams = {
  handler: async (req) => {
    const { id } = req.params;
    return service.teams(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [POST] /students/{studentId}/teams/{teamId}/leave
exports.leaveTeam = {
  handler: async (req) => {
    const { studentId, teamId } = req.params;
    return service.leaveTeam(studentId, teamId);
  },
  validate: {
    params: {
      studentId: Joi.string().guid({ version: 'uuidv4' }),
      teamId: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.studentId}'],
  },
};

// [GET] /students/{id}/invites
exports.invites = {
  handler: async (req) => {
    const { id } = req.params;
    return service.invites(id);
  },
  validate: {
    params: {
      id: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.id}'],
  },
};

// [POST] /students/{studentId}/invites/{teamId}/accept
exports.acceptInvite = {
  handler: async (req) => {
    const { studentId, teamId } = req.params;
    return service.acceptInvite(studentId, teamId);
  },
  validate: {
    params: {
      studentId: Joi.string().guid({ version: 'uuidv4' }),
      teamId: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.studentId}'],
  },
};

// [POST] /students/{studentId}/invites/{teamId}/reject
exports.rejectInvite = {
  handler: async (req) => {
    const { studentId, teamId } = req.params;
    return service.rejectInvite(studentId, teamId);
  },
  validate: {
    params: {
      studentId: Joi.string().guid({ version: 'uuidv4' }),
      teamId: Joi.string().guid({ version: 'uuidv4' }),
    },
  },
  auth: {
    scope: ['admin', 'user-{params.studentId}'],
  },
};
