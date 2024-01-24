const _0x3807c0 = (function () {
    let _0x2d4be7 = true
    return function (_0x237d3a, _0x226497) {
      const _0x657223 = _0x2d4be7
        ? function () {
            if (_0x226497) {
              const _0x2fb551 = _0x226497.apply(_0x237d3a, arguments)
              return (_0x226497 = null), _0x2fb551
            }
          }
        : function () {}
      return (_0x2d4be7 = false), _0x657223
    }
  })(),
  _0x2cbe59 = _0x3807c0(this, function () {
    return _0x2cbe59
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2cbe59)
      .search('(((.+)+)+)+$')
  })
_0x2cbe59()
const _0xd14359 = {}
_0xd14359.question =
  '#LiveGameStudentTarget > div > div:nth-child(2) > div > div > div:nth-child(2) > div > h2 > div > div'
_0xd14359.boxes =
  '#LiveGameStudentTarget > div > div:nth-child(2) > div > div:nth-child(3)'
const _0x539285 = {}
_0x539285.question = '.QuestionView > div > div:last-child '
_0x539285.boxes = '.QuestionView > div:nth-child(2)'
const _0x26e395 = {}
_0x26e395.checkpoint = _0xd14359
_0x26e395.normal = _0x539285
const data = _0x26e395,
  logInfo = () => {
    console.log(
      '%cFusk skapad av Ruben Ruberto',
      'color: #6366f1; font-size: 16px; font-weight: bold;'
    )
    console.info(
      '%cBlixten är du redo? jajamen, blixten är redo',
      'font-size: 14px;'
    )
  }
function findFiber(_0x24a255) {
  if (!_0x24a255) {
    return undefined
  }
  const _0x26a3f4 = Object.keys(_0x24a255).find((_0x39dae1) => {
      return _0x39dae1.startsWith('__reactFiber$')
    }),
    _0x2347ce = _0x24a255[_0x26a3f4]
  if (!_0x2347ce) {
    return undefined
  }
  const _0x188f35 = (_0x1d9efa) => {
      let _0x61e91 = _0x1d9efa.return
      while (typeof _0x61e91.type == 'string') {
        _0x61e91 = _0x61e91.return
      }
      return _0x61e91
    },
    _0xf77494 = _0x188f35(_0x2347ce)
  return _0xf77494
}
function findTerms(_0x47cd31) {
  return (
    _0x47cd31.memoizedProps.children['_owner']?.memoizedProps.terms?['_tail']
      .array ||
    _0x47cd31.memoizedProps.children.props.terms?['_tail'].array ||
    _0x47cd31.stateNode?.props.children[1].props.children[1].props.children
      .props.previewTerms
  )
}
const findAnswer = (_0x13c764, _0x5a751f) => {
    return _0x13c764.filter((_0x2e4ef7) => {
      if (_0x2e4ef7.text === _0x5a751f) {
        return _0x2e4ef7.answer
      } else {
        if (_0x2e4ef7.answer === _0x5a751f) {
          return _0x2e4ef7.text
        }
      }
    })
  },
  displayAnswer = (_0x10aa37, _0x39071a) => {
    const _0x1ccd9d = data[_0x39071a].boxes
    for (let _0x552af0 of _0x10aa37) {
      let _0x2c43cc = 1
      while (_0x2c43cc <= document.querySelector(_0x1ccd9d).children.length) {
        if (_0x39071a === 'checkpoint') {
          const _0x3a704e = document.querySelector(
            _0x1ccd9d +
              ' > div:nth-child(' +
              _0x2c43cc +
              ') > div:nth-child(2) > div > div'
          ).textContent
          if (_0x3a704e === _0x552af0.text || _0x3a704e === _0x552af0.answer) {
            document.querySelector(
              _0x1ccd9d + ' > div:nth-child(' + _0x2c43cc + ')'
            ).style.backgroundColor = '#50C878'
          }
        } else {
          if (_0x39071a === 'normal') {
            const _0x178d72 = document.querySelector(
                _0x1ccd9d +
                  ' > div:nth-child(' +
                  _0x2c43cc +
                  ') > span > button > span'
              ),
              _0x3bb89b = _0x178d72.textContent
            if (
              _0x3bb89b === _0x552af0.text ||
              _0x3bb89b === _0x552af0.answer
            ) {
              _0x178d72.style.backgroundColor = '#50C878'
            }
          }
        }
        _0x2c43cc++
      }
    }
  },
  clearBackground = (_0x4b774d) => {
    const _0x518f97 = data[_0x4b774d].boxes
    let _0xc182d8 = 1
    while (_0xc182d8 <= document.querySelector(_0x518f97).children.length) {
      if (_0x4b774d === 'normal') {
        document.querySelector(
          _0x518f97 +
            ' > div:nth-child(' +
            _0xc182d8 +
            ') > span > button > span'
        ).style.backgroundColor = '#FA6969'
      } else {
        _0x4b774d === 'checkpoint' &&
          (document.querySelector(
            _0x518f97 + ' > div:nth-child(' + _0xc182d8 + ')'
          ).style.backgroundColor = '#FA6969')
      }
      _0xc182d8++
    }
  },
  showAnswers = (_0x14a09f, _0x22ade0) => {
    const _0x252de1 = data[_0x22ade0].question
    let _0x112a72 = ''
    setInterval(() => {
      if (!document.querySelector(_0x252de1)) {
        return
      }
      const _0x3ade8a = document.querySelector(_0x252de1).textContent
      if (_0x112a72 !== _0x3ade8a) {
        clearBackground(_0x22ade0)
        const _0x591314 = findAnswer(_0x14a09f, _0x3ade8a)
        displayAnswer(_0x591314, _0x22ade0)
        _0x112a72 = _0x3ade8a
      }
    }, 400)
  },
  main = async () => {
    const _0x52895a = findFiber(
        document.getElementsByClassName('StudentLayout')[0] ?? undefined
      ),
      _0x19eab3 = findTerms(_0x52895a)
    if (!(window.Quizlet && window.Quizlet.liveGameStudentData)) {
      throw new Error("You aren't in a Quizlet game")
    }
    if (_0x19eab3) {
      const _0xc7c167 = _0x19eab3.map((_0x51c9eb) => {
          const _0x396f00 = {}
          return (
            (_0x396f00.text = _0x51c9eb['_root'].nodes[4].entry[1]),
            (_0x396f00.answer =
              _0x51c9eb['_root'].nodes[10].nodes[0].nodes[0].entry[1]),
            _0x396f00
          )
        }),
        _0x4d4a1e = {}
      return (
        (_0x4d4a1e.data = _0xc7c167), (_0x4d4a1e.type = 'normal'), _0x4d4a1e
      )
    } else {
      const _0x416246 = Quizlet.liveGameStudentData.checkpointToken,
        _0xfd612d =
          _0x52895a.memoizedProps.children['_owner'].memoizedProps
            .checkpointCode
      if (!_0x416246 || !_0xfd612d) {
        throw new Error("Du är inte i ett spel")
      }
      const _0x40f349 = await (
          await fetch(
            'https://checkpoint.quizlet.com/join?gameCode=' +
              _0xfd612d +
              '&token=' +
              _0x416246
          )
        ).json(),
        _0x1e56a0 = await fetch(
          'https://quizlet.com/' + _0x40f349.studiableContainerId
        )
      if (_0x1e56a0.status !== 200) {
        throw new Error('Detta spelet är privat')
      }
      const _0x3dea33 = new DOMParser().parseFromString(
          await _0x1e56a0.text(),
          'text/html'
        ),
        _0x240455 = _0x3dea33.querySelectorAll('.TermText'),
        _0x216a05 = []
      let _0x36b7bc = 0
      while (_0x36b7bc < _0x240455.length) {
        let _0x2d5d31 = {
          text: _0x240455[_0x36b7bc].textContent,
          answer: _0x240455[_0x36b7bc].textContent,
        }
        _0x36b7bc++
        _0x216a05.push(_0x2d5d31)
        _0x36b7bc++
      }
      const _0x6f2194 = {}
      return (
        (_0x6f2194.data = _0x216a05), (_0x6f2194.type = 'checkpoint'), _0x6f2194
      )
    }
  }
;(async () => {
  try {
    console.clear()
    const _0x4f1d42 = await main()
    console.debug('Answers:', _0x4f1d42)
    console.log(
      '%cAnswers downloaded successfully. You can now close the console.',
      'color: #50C878; font-size: 24px'
    )
    logInfo()
    showAnswers(_0x4f1d42.data, _0x4f1d42.type)
  } catch (_0x43179b) {
    console.log('%c' + _0x43179b, 'color: #FA6969; font-size: 20px')
  }
})()
