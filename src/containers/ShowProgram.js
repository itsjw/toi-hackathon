import { connect } from 'react-redux'
import { fetchShowProgramRequest } from 'store/actions'
import { ShowProgram } from 'components'

export const mapStateToProps = state => ({
  // showProgram: state.showProgram
  showProgram:
  [
    {
      id: 1,
      name: 'А может не надо?',
      price: '600',
      type: 'Танцевальная группа',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартнойдля текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show1.jpg',
    },
    {
      id: 2,
      name: 'группа Queen',
      price: '666',
      type: 'Музыкальная группа',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартнойдля текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show2.jpg',
    },
    {
      id: 3,
      name: 'Верните малютку',
      price: '690',
      type: 'Танцевальная группа',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show3.jpg',
    },
    {
      id: 4,
      name: 'RIP Chester',
      price: '9999',
      type: 'Cover band',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной ля текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show4.jpg',
    },
    {
      id: 5,
      name: 'Балет, Шоу Балет',
      price: '600',
      type: 'Танцевальная группа',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартнойтекстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show5.png',
    },
    {
      id: 6,
      name: 'Той - крушить!',
      price: 'бесценно',
      type: 'Танцевальная группа',
      description: "Lorem Ipsum - это текст-'рыба', часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартнойя текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
      address: 'г.Бишкек Асанбай',
      phone: '+996550778133',
      photo: 'show6.png',
    },

  ],
})

export const mapDispatchToProps = dispatch => ({
  fetchShowProgramRequest: () => dispatch(fetchShowProgramRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowProgram)
