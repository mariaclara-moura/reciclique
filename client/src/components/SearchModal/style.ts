import styled from 'styled-components';

export const Container = styled.div`
  max-width: 35rem;
  min-height: 25rem;
  margin: auto;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px #ddd;

  h4 {
    margin: 1rem 0 0.5rem;
    font-size: 0.9rem;
    color: #666;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.5rem 0;
`;

export const Tag = styled.div<{ selected?: boolean }>`
  padding: 0.3rem 0.6rem;
  background-color: ${({ selected }) => (selected ? '#9bb58d' : '#eee')};
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;

  .back {
    background: #eee;
    color: #333;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }

  .filter {
    background: #9bb58d;
    color: #fff;
    border: none;
    padding: 0.4rem 1rem;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin-top: 2rem;
`;
