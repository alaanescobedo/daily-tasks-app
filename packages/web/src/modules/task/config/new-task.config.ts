import { Form_New_Task } from '@interfaces'

export const NEW_TASK_INPUT_CONFIG: Form_New_Task = {
  title: {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Title',
    required: true,
    maxLength: 70,
    value: ''
  },
  day: {
    id: 'day',
    label: 'Day',
    type: 'date',
    placeholder: 'Day',
    required: true,
    defaultValue: new Date().toISOString().split('T')[0]
  },
  hour: {
    id: 'hour',
    label: 'Hour',
    type: 'time',
    required: true
  },
  recurrent: {
    id: 'recurrent',
    label: 'Recurrent',
    type: 'checkbox',
    required: false,
    defaultValue: false
  },
  priority: {
    id: 'priority',
    label: 'Priority',
    type: 'select',
    defaultValue: 'medium',
    required: true,
    options: [
      { id: 'low', label: 'Low' },
      { id: 'medium', label: 'Medium' },
      { id: 'high', label: 'High' }
    ]
  }
}
