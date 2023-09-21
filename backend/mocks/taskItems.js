const TASK_ITEMS = [
	{
		id: 1,
		name: 'Onboarding Introduction',
		subHeading: 'A brief introduction to the tasks required.',
		requiresSubmit: false,
		status: 'completed',
		fields: [
			{
				id: '1-1',
				type: 'paragraph',
				content: 'In this onboarding you are required to fill out each task and confirm the the information contained is correct.',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '1-2',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '1-3',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '1-4',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '1-5',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			}
		],
	},
	{
		id: 2,
		name: 'Identity Validation',
		subHeading: 'Provide valid photo identification',
		requiresSubmit: true,
		status: 'open',
		fields: [
			{
				id: '2-6',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '2-7',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '2-1',
				type: 'inputText',
				label: 'first name',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 4,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '2-2',
				type: 'inputText',
				label: 'middle name',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 4,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '2-3',
				type: 'inputText',
				label: 'surname',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 4,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '2-4',
				type: 'inputDocument',
				label: 'identity document',
				optional: false,
				validation: {
					acceptType: 'image',
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '2-5',
				type: 'inputDocument',
				label: 'liveness photo',
				optional: false,
				validation: {
					acceptType: 'image',
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			}
		],
	},
	{
		id: 3,
		name: 'Address Validation',
		subHeading: 'Provide valid proof of address',
		requiresSubmit: true,
		status: 'open',
		fields: [
			{
				id: '2-6',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '2-7',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '3-1',
				type: 'inputText',
				label: 'address line 1',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '3-2',
				type: 'inputText',
				label: 'address line 2',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '3-3',
				type: 'inputText',
				label: 'address line 3',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '3-4',
				type: 'inputText',
				label: 'city',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '3-5',
				type: 'inputSelect',
				label: 'country',
				optional: false,
				options: [
					{
						value: 'ie',
						label: 'Ireland',
					},
					{
						value: 'uk',
						label: 'United Kingdom',
					},
					{
						value: 'ro',
						label: 'Romania',
					}
				],

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '3-6',
				type: 'inputDocument',
				label: 'copy of bill with address',
				optional: false,
				validation: {
					acceptType: 'image',
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			}
		],
	},
	{
		id: 4,
		name: 'Financial Records',
		subHeading: 'Provide details of financial transactions',
		requiresSubmit: true,
		status: 'open',
		fields: [
			{
				id: '2-6',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '2-7',
				type: 'paragraph',
				content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero. ',
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			},
			{
				id: '4-1',
				type: 'inputText',
				label: 'bank address line 1',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-2',
				type: 'inputText',
				label: 'bank address line 2',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-3',
				type: 'inputText',
				label: 'bank address line 3',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-4',
				type: 'inputText',
				label: 'bank city',
				optional: false,
				validation: {
					min: 3,
					max: 300,
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-5',
				type: 'inputSelect',
				label: 'bank country',
				optional: false,
				options: [
					{
						value: 'ie',
						label: 'Ireland',
					},
					{
						value: 'uk',
						label: 'United Kingdom',
					},
					{
						value: 'ro',
						label: 'Romania',
					}
				],

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-6',
				type: 'inputDocument',
				label: 'copy of bill with address',
				optional: false,
				validation: {
					acceptType: 'pdf',
				},

				size: {
					lg: 6,
					md: 6,
					sm: 6,
					xs: 12,
				},
			},
			{
				id: '4-7',
				type: 'inputTextArea',
				label: 'additional information',
				optional: true,
				size: {
					lg: 12,
					md: 12,
					sm: 12,
					xs: 12,
				},
			}
		],
	}
];

module.exports.tasks = TASK_ITEMS;