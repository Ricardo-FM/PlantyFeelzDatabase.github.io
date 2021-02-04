USE Botani_dex;

INSERT INTO plants (name) VALUES ('Fern');
INSERT INTO plants (name) VALUES ('Ivy');
INSERT INTO plants (name) VALUES ('Lycaste');
INSERT INTO plants (name) VALUES ('Peace Lily');
INSERT INTO plants (name) VALUES ('Aloe Vera');
INSERT INTO plants (name) VALUES ('Snake Plant');
INSERT INTO plants (name) VALUES ('Spider Plant');
INSERT INTO plants (name) VALUES ('Bamboo');
INSERT INTO plants (name) VALUES ('Zebra Plant');
INSERT INTO plants (name) VALUES ('Palm Tree');

INSERT INTO genus (genus_name) VALUES ('Dracena');
INSERT INTO genus (genus_name) VALUES ('Begonia');
INSERT INTO genus (genus_name) VALUES ('Alocasia');
INSERT INTO genus (genus_name) VALUES ('Yucca');
INSERT INTO genus (genus_name) VALUES ('Maranta');
INSERT INTO genus (genus_name) VALUES ('Violet');
INSERT INTO genus (genus_name) VALUES ('Lily');
INSERT INTO genus (genus_name) VALUES ('Orchids');
INSERT INTO genus (genus_name) VALUES ('Calathea');
INSERT INTO genus (genus_name) VALUES ('Rosa');

INSERT INTO maintenance (water, temperature, light, humidity, soil) 
VALUES 
 ('Directly into soil', 65.0, 'Few hours of mild sunligiht', 'Average', 'Water soluble'),
 ('Keep moist but not wet', 75, 'Direct sunlight preferred', 'Requires high humidity levels', 'Fertilizer spikes/sticks'),
 ('Immerse into standing water', 60.0, 'Avoid direct sunlight', 'Prefers low level humidity', 'Special fertilizer'),
 ('Minimal water required', 70.0, 'Few hours of mild sunlight', 'Average', 'Fertilizer spikes/sticks'),
 ('Directly to roots', 65.0, 'Avoid direct sunlight', 'Average', 'Water soluble');