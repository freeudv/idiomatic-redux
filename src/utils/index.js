export function createStateTransitionTester(reducer, initialState) {
  // запоминаем редьюсер и его исходное состояние, чтобы не повторять их в каждом тесте
  return (testCaseName, params) => {
    const {
      action,
      modifiedState = initialState // по умолчанию считаем, что переход совершается из начального состояния
    } = params

    // Ожидаемое состояние может зависеть от исходного состояния,
    // поэтому даём возможность генерации ожидаемого состояния на основе исходного

    const expectedState =
      typeof params.expectedState === "function"
        ? params.expectedState(modifiedState)
        : params.expectedState

    test(testCaseName, () => {
      expect(reducer(modifiedState, action)).toEqual(expectedState)
    })
  }
}
