
export function fetchComponentDataBeforeRender(dispatch, components, params) {

  const needs = components.reduce( (prev, current) => {

    console.log('current', current.need )
    if (!current)
      return []

    return (current.need || [])
      .concat((current.WrappedComponent ? current.WrappedComponent.need : []) || [])
      .concat(prev);
    }, []);

    const promises = needs.map(need => dispatch(need()));
    console.log('need', promises)

    return Promise.all(promises);
}
