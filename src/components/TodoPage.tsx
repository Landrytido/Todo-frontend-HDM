import { Check, Delete } from '@mui/icons-material';
import {
  Box, Button, Container, IconButton, TextField, Typography, Checkbox,
} from '@mui/material';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.ts';
import { Task } from '../index';

const TodoPage = () => {
  const api = useFetch();
  const [ tasks, setTasks ] = useState<Task[]>([]);
  const [ newTaskName, setNewTaskName ] = useState<string>('');

  const handleFetchTasks = async () => setTasks(await api.get('/tasks'));

  const handleDelete = async (id: number) => {
    await api.delete(`/tasks/${id}`);
    handleFetchTasks();
  };

  const handleSave = async (task: Task) => {
    if (task.name.trim() === '') return;
    await api.patch(`/tasks/${task.id}`, { name: task.name, completed: task.completed });
    handleFetchTasks();
  };

  const handleAddTask = async () => {
    if (newTaskName.trim() === '') return;
    await api.post('/tasks', { name: newTaskName });
    setNewTaskName('');
    handleFetchTasks();
  };

  const handleToggleComplete = async (task: Task) => {
    task.completed = !task.completed;
    await handleSave(task);
  };

  useEffect(() => {
    handleFetchTasks();
  }, []);

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={5}>
        <Typography variant="h2">HDM Todo List</Typography>
      </Box>

      <Box justifyContent="center" mt={5} flexDirection="column">
        {tasks.map((task) => (
          <Box key={task.id} display="flex" justifyContent="center" alignItems="center" mt={2} gap={1} width="100%">
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task)}
            />
            <TextField
              size="small"
              value={task.name}
              onChange={(e) => {
                const updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, name: e.target.value } : t));
                setTasks(updatedTasks);
              }}
              fullWidth
              sx={{ maxWidth: 350 }}
            />
            <Box>
              <IconButton
                color="success"
                disabled={task.name.trim() === ''}
                onClick={() => handleSave(task)}
              >
                <Check />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(task.id)}>
                <Delete />
              </IconButton>
            </Box>
          </Box>
        ))}

        <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={1}>
          <TextField
            size="small"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Nouvelle tâche"
            fullWidth
            sx={{ maxWidth: 350 }}
          />
          <Button variant="outlined" onClick={handleAddTask}>
            Ajouter une tâche
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TodoPage;
